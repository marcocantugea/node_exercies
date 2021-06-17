/**
 * unit testing for user auth
 * 
 */

var assert = require("assert");
const {expect } = require("chai");
const auth_repository = require("../../data/repositories/auth_repository");

describe("Pruebas unitarias Repository auth",function(){
    it("prueba funcion de log user",function(){
        let userIsLog=auth_repository.logUser("marco.cantu.g@gmail.com","1234567");
         expect(userIsLog).to.be.true;
    });
});



