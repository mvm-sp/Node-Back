const express = require('express');

const querys ={
        getAll:'select * from prGetdoctorext(null)',
        getById:'select * from prGetdoctorext($1)',
        add:'select prPostdoctorext($1, $2, $3, $4)',
        update:'select prPutdoctorext($1, $2, $3, $4, $5, $6)',
        remove:'select prDeletedoctorext($1)',
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
    ret.data = {nmdoctorext: req.body.nmdoctorext, crmdoctorext: req.body.crmdoctorext, idclient: req.body.idclient, ismed: req.body.ismed}
    ret.params = objToArray(ret.data);
    return ret;
}

function buildUpdate(req){
    ret.data = {id:req.params.id,nmdoctorext: req.body.nmdoctorext, crmdoctorext: req.body.crmdoctorext, idclient: req.body.idclient, ismed: req.body.ismed, active: req.body.active}
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