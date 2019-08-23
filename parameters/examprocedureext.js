const express = require('express');

const querys ={
        getAll:'select * from prGetexamprocedureext(null)',
        getById:'select * from prGetexamprocedureext($1)',
        add:'select prPostexamprocedureext($1, $2, $3, $4, $5)',
        update:'select prPutexamprocedureext($1, $2, $3, $4, $5, $6, $7)',
        remove:'select prDeleteexamprocedureext($1)',
        log:'select * from prPostLogApi($1, $2 ,$3, $4)'
    };


const ret =  {  data : {},
                params:{}
             };

function setQuerys(){
    return querys;
}

function buildGetAll(req){
    return ret;
}

function buildGetById(req){
    ret.data = {id:req.params.id};
    ret.params = objToArray(ret.data);
    return ret;
}

function buildAdd(req){
    ret.data = {code: req.body.code, dsexamprocedureext: req.body.dsexamprocedureext, idmodalityext: req.body.idmodalityext, idclient: req.body.idclient, isproced: req.body.isproced}
    ret.params = objToArray(ret.data);
    return ret;
}

function buildUpdate(req){
    ret.data = {id:req.params.id,code: req.body.code, dsexamprocedureext: req.body.dsexamprocedureext, idmodalityext: req.body.idmodalityext, idclient: req.body.idclient, isproced: req.body.isproced, active: req.body.active}
    ret.params = objToArray(ret.data);
    return ret;
}

function buildRemove(req){
    ret.data = {id:req.params.id};
    ret.params = objToArray(ret.data);
    return ret;
}

function buildLog(req, userId){
    ret.data = {apiAddress: req.method + req.url , 
                request: req.body ,
                response: 'response successfully sent', 
                user: userId};
    ret.params = objToArray(ret.data);
    return ret;
}

function objToArray(obj){
    var result = [];
    for (var key in obj) {
       if (obj.hasOwnProperty(key)) {
           result.push(obj[key]);
       }
    }
    return result;
}
module.exports = {
    setQuerys,
    buildGetAll,
    buildGetById,
    buildAdd,
    buildUpdate,
    buildRemove,
    buildLog
};