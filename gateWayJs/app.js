const Application = require('koa');
const app = new Application();
const child_process = require('child_process');
const router = require('./router');
const serviceLocalStorage = require('./serviceLocalStorage.js');
//监听3000端口
app.listen(3000,() => {
    console.log('Server running at 3000');
    
});
app
    .use(router.routes())
    .use(router.allowedMethods);

// fork一个子进程，用于监听servie 列表变化
const workerProcess = child_process.fork('./startWatch.js');

// 子进程退出
workerProcess.on('exit', function (code) {
    console.log(`子进程已退出，退出码：${code}`);
});
workerProcess.on('error', function (error) {
    console.log(`error: ${error}`);
});

// 监控线程中接收到数据
workerProcess.on('message', msg => {
    if (msg) {
        console.log(`从监控中数据变化：${JSON.stringify(msg)}`);
        console.log(`发现 service 变化，将变化列表 ${msg.name} => ${JSON.stringify(msg.data)} 写入缓存`)
        //通知缓存中service列表变化
        serviceLocalStorage.setItem(msg.name, msg.data);
    }
});
