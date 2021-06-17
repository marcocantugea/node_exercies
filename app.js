/**
 * creating our first API REST
 * 
 */
const express= require("express");
var app = express();
app.get("/",function(request,response){
    response.send("HELLO node api rest");
});
app.post("/auth")

app.listen(10000,function(){
    console.log("started applicacion on port %d",10000);
})