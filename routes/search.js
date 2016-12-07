var express = require('express');
var articles = require('../models/articles');//导入模型数据模块

var router = express.Router();
 router.post('/', function(req, res) {
      articles.find(function(err,obj){
        if(err){
          res.json({"status":-1})
        }else{
          res.json({"status":0,"data":obj})
        }
      })
 })

module.exports = router;
