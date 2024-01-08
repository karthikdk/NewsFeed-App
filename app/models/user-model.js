const mongoose=require('mongoose')

const {Schema}=mongoose

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        required:true
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:8,
        maxlength:128
    }
},{timestamps:true})

const User=mongoose.model('User',userSchema)

module.exports=User
