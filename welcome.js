var http=require('http');
var onReceive=function(req,res)
{
res.write('<h1>Linux Web</h1>');
res.end();
}
var app=http.createServer(onReceive);
app.listen(9000);
console.log("Test Web Server is listening on part 9000");
