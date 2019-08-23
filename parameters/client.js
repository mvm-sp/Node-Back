const express = require('express');

const querys ={
        getAll:'select * from prGetclient(null)',
        getById:'select * from prGetclient($1)',
        add:'select prPostclient($1, $2, $3, $4)',
        update:'select prPutclient($1, $2, $3, $4, $5, $6)',
        remove:'select prDeleteclient($1)',
        getFull: 'select * from prGetFullclient(null)',
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
    ret.data = {nmclient: req.body.nmclient, idcompanyregion: req.body.idcompanyregion, idcompanysize: req.body.idcompanysize, idcompanysector: req.body.idcompanysector}
    ret.params = objToArray(ret.data);
    return ret;
}

function buildUpdate(req){
    ret.data = {id:req.params.id,nmclient: req.body.nmclient, idcompanyregion: req.body.idcompanyregion, idcompanysize: req.body.idcompanysize, idcompanysector: req.body.idcompanysector, active: req.body.active}
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