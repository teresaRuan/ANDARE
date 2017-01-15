var express = require('express');
var users = require('../models/users');//导入模型数据模块

var router = express.Router();
 router.post('/', function(req, res) {
    users.find({email:req.body.email},function(err,obj){
      if(obj.length<=0){
        users.create(req.body,function(err,node,numAffected){
          if(err){
            console.log(err);
            res.json({"status":-3})
          }else{
            res.json({"status":0,"newUser":req.body})
          }
        });
      }else{
        res.json({"status":-1})
      }
    })
 })

module.exports = router;
