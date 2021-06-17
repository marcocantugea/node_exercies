/**
 * 
 * unit testing for mysql connection
 * 
 */

var assert = require("assert");
var mysql_connection = require("../../data/mysql/mysql_local_connection");

describe("Mysql class connection",function(){
    describe("connection creation",function(){
        it("create connection to the database",function(){
            mysql_connection.mysql_connection.connect(function(err){
                if(err){
                    assert.fail("error connecting to db");
                    return;
                }
            });
        });
        it("clossing database ", function(){
            mysql_connection.mysql_connection.end(function(err){
                if(err){
                    assert.fail("error closing to db");
                    return;
                }
            });
        });
    });
})