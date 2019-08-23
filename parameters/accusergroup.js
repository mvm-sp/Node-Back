const express = require('express');

const querys ={
        getAll:'select * from prGetaccusergroup(null)',
        getById:'select * from prGetaccusergroup($1)',
        add:'select prPostaccusergroup($1)',
        update:'select prPutaccusergroup($1, $2, $3)',
        remove:'select prDeleteaccusergroup($1)',
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
    ret.data = {iduser: req.body.iduser, idgroup: req.body.idgroup}
    ret.params = objToArray(ret.data);
    return ret;
}

function buildUpdate(req){
    ret.data = {id:req.params.id,iduser: req.body.iduser, idgroup: req.body.idgroup, active: req.body.active}
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