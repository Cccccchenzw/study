var http=require("http");
var fs=require("fs");
var server=http.createServer();
server.on("request",function(request,response){
    var url=request.url;
    if(url==="/"){
        fs.readFile("./resource/index.html",function(error,data){
            if(error){
                response.setHeader("Content-Type","text/plain;charset=utf-8");
                response.end("文件读取失败啦");
            }else {
                response.setHeader("Content-Type","text/html;charset=utf-8");
                // response.end();支持两种数据类型，一是二进制，而是字符串。
                response.end(data);
            }
        });
    }else if(url==="/baoma"){
        fs.readFile("./resource/1.jpg",function(error,data){
            if(error){
                response.setHeader("Content-Type","text/plain;charset=utf-8");
                response.end("文件读取失败啦");
            }else {
                // tool.oschina.net--->HTTP Mime-type常用对照表 根据不同文件类型
                // 调整不同的Content-Type值格式
                response.setHeader("Content-Type","image/jpeg");               
                response.end(data);
            }
        });
    }else {
        fs.readFile("./resource/failed.html",function(error,data){
            if(error){
                response.setHeader("Content-Type","text/plain;charset=utf-8");
                response.end("文件读取失败啦");
            }else {
                response.setHeader("Content-Type","text/html;charset=utf-8");               
                response.end(data);
            }
        });
    }
});
server.listen(3008,function(){
    console.log("服务器启动成功，可以通过http://127.0.0.1:3008访问");
})