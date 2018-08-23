const Router = require('koa-router');
const router = new Router();
const discovery = require('./discovery').connect();
const request = require('superagent');

router.get('/service-web/', async(ctx, next) => {
    const host = await getServiceHost('service-web');
    
    const fetchUrl = `http://${host}/`;
    const result = await request.get(fetchUrl);
    console.log(`getRemoteIp:${result.text}`);
    
    ctx.body = result.text;
});

/**
 * 根据service name 获取 service 对应host
 */
async function getServiceHost(name) {
    const services = await discovery.getService({service: name});
    // 获取随机数据
    random = Math.floor(Math.random() * (services.length));
    const host = services[random];
    console.log(`service host ${services[random]}`)
    return host;
}

module.exports = router;