/**
 * 
 * Repository for users
 * 
 */

const database= require("../mysql/mysql_local_connection");

function openAuth(){
    database.mysql_connection.connect(function(error){
        if(error) throw error;
    });
}

function closeAuth(){
    database.mysql_connection.end();
}

function userAuth(username,password){
    let  userIsAuth=false;
    openAuth();
    var objects = [];
    let query = database.mysql_connection.query("SELECT email,active from t_users where email=?",[username,password]);

    query
    .on('result',function(row) {
        objects.push(row);
    });
    closeAuth();

    if(objects){
        objects.forEach(element =>{
            if(element.active==1){
                userIsAuth=true;    
            }
        });
    }

    return userIsAuth;
}





// var log_user=false;
// var value = Promise.resolve((user,password)=>{
//     //creamos el query para obtener el usuario y password
//     let query="SELECT email,active FROM t_users where email=? and password=md5(?);";
//     let result=false;
//     //abrimos la conexion 
//    openAuth();

//     database.mysql_connection.query(query, [user, password], function (error, rows, fiels) {
//         if (error) throw error;

//         rows.forEach(element => {
//             // // var userobj = {
//             // //     user:element.email,
//             // //     active:element.active
//             // // }
//             // objects.push(element);
//             // // if(element.active===1){
//             // //     userlog= true;
//             // // }

//             // // console.log(element);
//             if(element.active==1){
//                 log_user=true;
//             }
//         });

//     });

//     closeAuth();
// });



// exports
// module.exports.loguserpromise=value;
// module.exports.loguser=log_user;
module.exports.logUser=userAuth;