const watch = require('./watch');

// 监听注册中心的service变化，如果发现变化，则通知主进程的service列表进行更新
watch.connect().watch(['service-web'],(error,data)=>{
   process.send(data);
});