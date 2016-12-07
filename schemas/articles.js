var mongoose=require('mongoose');

var ArticlesSchema=new mongoose.Schema({
    type:int,
    title:String,
    content:String,
    likes:int,
    comments:array
})

ArticlesSchema.static={
    search:function(keyword,cd){
        return this
        .find({title:keyword})
        .exec()
    }
}

module.exports=ArticlesSchema;
