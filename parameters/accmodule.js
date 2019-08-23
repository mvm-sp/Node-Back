const express = require('express');

const querys ={
        getAll:'select * from prGetaccmodule(null)',
        getById:'select * from prGetaccmodule($1)',
        add:'select prPostaccmodule($1, $2)',
        update:'select prPutaccmodule($1, $2, $3, $4)',
        remove:'select prDeleteaccmodule($1)',
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
    ret.data = {dsmodule: req.body.dsmodule, dspath: req.body.dspath}
    ret.params = objToArray(ret.data);
    return ret;
}

function buildUpdate(req){
    ret.data = {id:req.params.id,dsmodule: req.body.dsmodule, dspath: req.body.dspath, active: req.body.active}
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