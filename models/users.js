var mongoose=require('mongoose')

var usersSchema=new mongoose.Schema({
    username:String,
    password:String,
    email:String
})

/*UsersSchema.static={
    login:function(email,password){
        return this
        .findOne({email:email,password:password})
        .exec()
    }
}*/


module.exports=mongoose.model('users',usersSchema);
