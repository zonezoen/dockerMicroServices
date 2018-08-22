const consul = require('consul'); // 默认连接的是127.0.0.1:8500
const debug = require('debug')('dev:watch');
const utils = require('./utils');
class Watch {
    /**
     * 建立跟服务器链接
     * @param {*} args
     */
    connect(...args) {
        if (!this.consul) {
            //建立连接，
            //需要注意的时，由于需要动态获取docker内的consul server的地址，
            //所以host需要配置为consulserver（来自docker-compose配置的consulserver）
            //发起请求时会经过docker内置的dns server，即可把consulserver替换为具体的consul 服务器 ip
            debug(`与consul server连接中...`);
            this.consul = consul({
                host:'consulserver',
                ...args,
                promisify: utils.fromCallback //转化为promise类型
            });
        }
        return this;
    }
    /**
     * 监控需要的服务
     * @param {*} services
     * @param {*} onChanged
     */
    watch(services, onChanged) {
        const consul = this.consul;
        if (services === undefined) {
            throw new Error('service 不能为空')
        }
        if (typeof services === 'string') {
            serviceWatch(services);
        } else if (services instanceof Array) {
            services.forEach(service => {
                serviceWatch(service);
            });
        }
        function serviceWatch(service) {
            const watch = consul.watch({method: consul.catalog.service.nodes, options: {
                    service
                }});
            watch.on('change', data => {
                const result = {
                    name: service,
                    data
                };
                debug(`监听${service}内容有变化：${JSON.stringify(result)}`);
                onChanged(null, result);
            });
            watch.on('error', error => {
                debug(`监听${service}错误,错误的内容为：${error}`);
                onChanged(error, null);
            });
        }
        return this;
    }
}
module.exports = new Watch();