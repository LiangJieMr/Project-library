const http = require("http");

const  server =  http.createServer(function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*")
    var str="2019/5/8 23:32:10";
    res.end(JSON.stringify(new Date(str).getTime()))
});
server.listen(8008);