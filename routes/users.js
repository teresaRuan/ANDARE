/*export users function(req,res){
  console.log(1123131);
  username.find({email:req.body.email,password:req.body.password},function(err,obj){
    if(obj.length<=0){
      res.send('no result')
    }else{
      res.send('ok')
      console.log(res.status);
    }
  })
}*/
var express = require('express');
var users = require('../models/users');//导入模型数据模块

var router = express.Router();
 router.post('/', function(req, res) {
    users.find({email:req.body.email,password:req.body.password},function(err,obj){
      if(obj.length<=0){
        res.json({"status":-1})
      }else{
        console.log(obj)
        res.json({"status":0,"data":obj})
      }
    })
 })

module.exports = router;
