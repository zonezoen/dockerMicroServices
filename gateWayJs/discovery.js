const Consul = require('consul');
const utils = require('./utils');
const serviceLocalStorage = require('./serviceLocalStorage.js');
class Discovery {
    connect(...args) {
        if (!this.consul) {
            console.log("与consul server连接中...")
            //建立连接，
            //需要注意的时，由于需要动态获取docker内的consul server的地址，
            //所以host需要配置为consulserver（来自docker-compose配置的consulserver）
            //发起请求时会经过docker内置的dns server，即可把consulserver替换为具体的consul 服务器 ip
            this.consul =new Consul({
                host:'consulserver',
                ...args,
                promisify: utils.fromCallback //转化为promise类型
            });
        }
        return this;


    }
    /**
     * 根据名称获取服务
     * @param {*} opts
     */
    async getService(opts) {
        if (!this.consul) {
            throw new Error('请先用connect方法进行连接');
        }
        const {service} = opts;
        // 从缓存中获取列表
        const services = serviceLocalStorage.getItem(service);
        if (services.length > 0) {
            console.log(`命中缓存，key:${service},value:${JSON.stringify(services)}`)
            return services;
        }
        //如果缓存不存在，则获取远程数据
        let result = await this
            .consul
            .catalog
            .service
            .nodes(opts);
        console.log(`获取服务端数据，key：${service}：value:${JSON.stringify(result[0])}  result: ${JSON.stringify(result)}`);
        serviceLocalStorage.setItem(service, result[0])
        return result[0];
    }
}

module.exports = new Discovery();