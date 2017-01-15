var express = require('express');
var articles = require('../models/articles');//导入模型数据模块

var router = express.Router();
 router.post('/', function(req, res) {
     if(req.body.type){
       articles.find({type:req.body.type},function(err,obj){
         if(err){
           res.json({"status":-1})
         }else{
           res.json({"status":0,"data":obj})
         }
       })
     }else{
       articles.find({title:{$regex:req.body.keyword}},function(err,obj){
         if(err){
           res.json({"status":-1})
         }else{
           res.json({"status":0,"data":obj})
         }
       })
     }

 })

module.exports = router;
