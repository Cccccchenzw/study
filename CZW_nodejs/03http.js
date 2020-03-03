var http=require("http");
var server=http.createServer();
server.on("request",function(request,response){
    console.log("收到请求了你要干哈" + request.url);
    // response.write("this is the response");
    // response.end();等价于--->
    response.end("this is the response");
});
server.listen(308,function(){
    console.log("服务器启动成功，可以通过http://127.0.0.1:308访问");
});