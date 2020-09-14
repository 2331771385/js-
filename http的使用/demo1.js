//开启一个服务器
const express=require('express');

//创建一个服务器
const app=express();

//配置一些东西
const configValue={
    etag:false,//禁止协商缓存
    lastModified:false,//禁止协商缓存
    setHeaders:(res,path,stat)=>{
        res.set('Cache-Control', 'max-age=10') //强缓存超过时间间隔为10秒，超过10秒之后就重新想服务器发送请求
    },
}

app.use(express.static((__dirname + '/public'), configValue));

//监听端口号
app.listen(3000,function () {
    console.log('Server is running ...')
})