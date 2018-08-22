const Application = require('koa');
const app = new Application();
const Router = require('koa-router');
const router = new Router();
const ip = require('ip');
router.get('/', async(ctx) => {
    ctx.body = {
    ip: ip.address()
}
})
//监听3000端口
app.listen(3000, () => {
    console.log('aaaa')
});
app
    .use(router.routes())
    .use(router.allowedMethods);