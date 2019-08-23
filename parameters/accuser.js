const express = require('express');

const querys ={
        getAll:'select * from prGetaccuser(null)',
        getById:'select * from prGetaccuser($1)',
        add:'select prPostaccuser($1, $2, $3, $4, $5, $6, $7, $8)',
        update:'select prPutaccuser($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
        remove:'select prDeleteaccuser($1)',
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
    ret.data = {dsfirstname: req.body.dsfirstname, dslastname: req.body.dslastname, dsemailuser: req.body.dsemailuser, dspass: req.body.dspass, dtlastpass: req.body.dtlastpass, qtvalidpass: req.body.qtvalidpass, isremoteuser: req.body.isremoteuser, cdipaddress: req.body.cdipaddress}
    ret.params = objToArray(ret.data);
    return ret;
}

function buildUpdate(req){
    ret.data = {id:req.params.id,dsfirstname: req.body.dsfirstname, dslastname: req.body.dslastname, dsemailuser: req.body.dsemailuser, dspass: req.body.dspass, dtlastpass: req.body.dtlastpass, qtvalidpass: req.body.qtvalidpass, isremoteuser: req.body.isremoteuser, cdipaddress: req.body.cdipaddress, active: req.body.active}
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