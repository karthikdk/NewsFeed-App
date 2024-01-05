const mongoose=require('mongoose')

const {Schema}=mongoose

const articleSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    guid:{
        type:String,
        required:true
    },
    pubDate:{
        type:String,
        unique:true
    },
    link:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
},{timestamps:true})

const Article=mongoose.model('Article',articleSchema)
module.exports=Article