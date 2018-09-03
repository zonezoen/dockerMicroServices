const Router = require('koa-router');
const router = new Router();
const discovery = require('./discovery').connect();
const request = require('superagent');
var thrift = require('thrift');
var UserService = require('./moudelUser/UserService');
var ttypes = require('./moudelUser/userServices_types');
var PostService = require('./moudelPost/PostService');
var PotstTypes = require('./moudelUser/userServices_types');



router.get('/service-web/', async (ctx, next) => {
    const host = await getServiceHost('service-web');

    const fetchUrl = `http://${host}/`;
    const result = await request.get(fetchUrl);
    console.log(`getRemoteIp:${result.text}`);
    console.log("on nodejs client call registUser")

    // ctx.body = "registUser";
    ctx.body = result.text;
});

router.get('/user/regist/', async (ctx, next) => {
    const host = await getServiceHost("user-services-py");

    const fetchUrl = `http://${host}/`;
    console.log("on nodejs client call registUser" +
        "")
    //
    var connection = thrift.createConnection(host, 5000);
    connection.on("error", function (e) {
        console.log("=====")
        console.log(e);
    });
    var client = thrift.createClient(UserService, connection);
    client.registUser("zone", "123", "boy", "23", function (err, res) {
        if (err) {
            console.log(err);
            return
        }
        console.log("on nodejs client call registUser")
        console.log(res)
    })

    ctx.body = {"name": "zone"};
});

router.get('/test/', async (ctx, next) => {
    console.log("on nodejs client call registUser")

    var connection = thrift.createConnection('172.20.0.7', 3000);
    var client = thrift.createClient(PostService, connection);

    connection.on("error", function (e) {
        console.log("=====")
        console.log(e);
    });

    client.addPost("title11", "这是一篇文章", "python/docker/js", function (err, res) {
        if (err) {
            console.log(err);
            return
        }
        console.log("aaa")
    })
    client.delPost("title11", function (err, res) {
        if (err) {
            console.log(err);
            return
        }
        console.log("bbb")
        console.log(res)

    })
    client.getPost("title11", function (err, res) {
        if (err) {
            console.log(err);
            return
        }
        console.log("on nodejs client call registUser")
        console.log(res)
    })

    ctx.body = "registUser";
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