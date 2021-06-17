/**
 * 
 * realizando en evento desde una clase
 * 
 * 
 */

const Logger = require("./node_class_logger");
const log = new Logger();
const fs = require("fs");

log.on("log_message",(args)=>{
    let content= "mensaje: " + JSON.stringify(args) + "\r\n";
    console.log("writting to a log file");
    fs.writeFile("./tmp/log.log",content,{flag:'a+'},(error)=>{
        if(error)
            console.error(error);
    });
});


log.log("this is a message");
