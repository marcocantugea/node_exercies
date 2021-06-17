/**
 * Ejemplo de clase logger
 * 
 * 
 */

 const EventEmiter = require("events");

class Logger extends EventEmiter {

    log(message){
       console.log("loggin : "+ message);
       this.emit("log_message",{date:"17-Jun-2021",content:message});
    }
}

module.exports= Logger;