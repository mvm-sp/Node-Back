const express = require('express');
const pg = require('pg');
const path = require('path');
const localAuth = require('../public/auth/local');
const params = require('../parameters/accgroup');


//User Authentication object
var userObj = null ;
var querys = params.setQuerys();

function getAll(req, res, next){
  const results = [];
  userObj =  localAuth.isAuthenticated(req);
  if(userObj.status==0){
    // Get a Postgres client from the connection pool
    pg.connect(process.env.DATABASE_URL, (err, client, done) => {
      // Handle connection errors
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      // SQL Query > Select Data
      const query = client.query(querys.getAll);
      // Stream results back one row at a time
      query.on('row', (row) => {
        results.push(row);
      });
      // After all data is returned, close connection and return results
      query.on('end', () => {
        done();
        return res.json(results);
      });
    });
  }else{
    res.status(401).json({
      status: 'NoAccess',
      message: userObj.message
    });
  }
};

function getById(req, res, next){
  const results = [];
  // Grab data from the URL parameters
  const id = req.params.id;
  userObj =  localAuth.isAuthenticated(req);
  if(userObj.status==0){
    //Build parameter object data
    const objParam = params.buildGetById(req);
    // Get a Postgres client from the connection pool
    pg.connect(process.env.DATABASE_URL, (err, client, done) => {
      // Handle connection errors
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      // SQL Query > Select Data
      const query = client.query(querys.getById,objParam.params);
      // Stream results back one row at a time
      query.on('row', (row) => {
        results.push(row);
      });
      // After all data is returned, close connection and return results
      query.on('end', () => {
        done();
        return res.json(results);
      });
    });
  }else{
    res.status(401).json({
      status: 'NoAccess',
      message: userObj.message
    });
  }
}

function add(req, res, next){
  const results = [];
  // Grab data from http request
  userObj =  localAuth.isAuthenticated(req);
  if(userObj.status==0){
    //Build parameter object data
    const objParam = params.buildAdd(req);
    // Get a Postgres client from the connection pool
    pg.connect(process.env.DATABASE_URL, (err, client, done) => {
      // Handle connection errors
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      // SQL Query > Insert Data
      client.query(querys.add,objParam.params)
      // SQL Query > log 
      const query = client.query(querys.log,params.buildLog(req,userObj.user).params);
      // Stream results back one row at a time
      query.on('row', (row) => {
        results.push(row);
      });
      // After all data is returned, close connection and return results
      query.on('end', () => {
        done();
        return res.json(results);
      });
    });
  }else{
    res.status(401).json({
      status: 'NoAccess',
      message: userObj.message
    });
  }
}

function update(req, res, next){
  const results = [];

  userObj =  localAuth.isAuthenticated(req);

  if(userObj.status==0){
    //Build parameter object data
    const objParam = params.buildUpdate(req);
    // Get a Postgres client from the connection pool
    pg.connect(process.env.DATABASE_URL, (err, client, done) => {
      // Handle connection errors
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      // SQL Query > Update Data
      client.query(querys.update,objParam.params)
      // SQL Query > log 
      const query = client.query(querys.log,params.buildLog(req,userObj.user).params);
      // Stream results back one row at a time
      query.on('row', (row) => {
        results.push(row);
      });
      // After all data is returned, close connection and return results
      query.on('end', function() {
        done();
        return res.json(results);
      });
    });
  }else{
    res.status(401).json({
      status: 'NoAccess',
      message: userObj.message
    });
  }
}

function remove(req, res, next){
  const results = [];
  // Grab data from the URL parameters
  userObj =  localAuth.isAuthenticated(req);
  
  if(userObj.status==0){
    //Build parameter object data
    const objParam = params.buildRemove(req);
    // Get a Postgres client from the connection pool
    pg.connect(process.env.DATABASE_URL, (err, client, done) => {
      // Handle connection errors
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      // SQL Query > Delete Data
      client.query(querys.remove, objParam.params);
      // SQL Query > log 
      const query = client.query(querys.log,params.buildLog(req,userObj.user).params);
      // Stream results back one row at a time
      query.on('row', (row) => {
        results.push(row);
      });
      // After all data is returned, close connection and return results
      query.on('end', () => {
        done();
        return res.json(results);
      });
    });
  }else{
    res.status(401).json({
      status: 'NoAccess',
      message: userObj.message
    });
  }
}

module.exports = {
  getAll,
  getById,
  update,
  add,
  remove
};