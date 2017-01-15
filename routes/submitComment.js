var express = require('express');
var articles = require('../models/articles');//导入模型数据模块

var router = express.Router();
 router.post('/', function(req, res) {
      articles.findById({_id:req.body._id},function(err,obj){
        if(err){
          res.json({"status":-1})
        }else{
          obj.comments.push(req.body.newComment);
          obj.save(function(err,obj){
            if(err){
              res.json({"status":-3})
            }else{
              res.json({"status":0,"data":obj})
            }
          })
        }
      })
 })

module.exports = router;
