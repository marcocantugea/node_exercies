/**
 * Ejemplo de utilizar emitter
 * 
 * 
 */

const EventEmitter = require("events");
const emitter = new EventEmitter();
const fs = require("fs");

//registramos el evento
emitter.on("log_message",(args)=>{
    let content= "mensaje: " + JSON.stringify(args) + "\r\n";
    fs.writeFile("./tmp/log.log",content,{flag:'a+'},(error)=>{
        if(error){
            console.error(error);
        }
    });
});


emitter.emit("log_message",{id:1,mensaje:"Este es un mensaje"});
