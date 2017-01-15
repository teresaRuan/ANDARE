var mongoose=require('mongoose');
var articlesSchema=new mongoose.Schema({
    author:{name:String,icon:String},
    type:Number,
    title:String,
    content:String,
    banner:String,
    des:String,
    date:String,
    time:String,
    likes:Number,
    comments:[{username:String,content:String,icon:String}]
})



module.exports=mongoose.model('articles',articlesSchema);
