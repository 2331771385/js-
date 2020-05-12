/*
    * 使用promise实现ajax的操作
    */
var getJson=function (url) {
    //创建一个promise的实例
    var promise=new Promise((resolve, reject) => {
        //创建ajax的实例
        var xhr=new XMLHttpRequest();
        //开启服务
        xhr.open('get',url);
        //发送请求,因为是get请求，所以不需要再请求体中传递数据
        xhr.send();
        xhr.onreadystatechange=function () {
            if (this.readyState!==4){
                return;
            }
            if (this.status==200){
                //说明服务器已经接收到请求并且返回了正确的数据
                resolve(this.responseText)
            }else {
                reject(new Error(this.status))
            }
        }
    });
    return promise;
}

getJson('/s')
    .then(res=>{
        console.log(res)
    })
    .catch(error=>{
        console.log(error)
    })