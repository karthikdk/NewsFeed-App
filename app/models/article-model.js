const mongoose = require('mongoose')

const Schema = mongoose.Schema

const articleSchema = new Schema({
    pubDate : {
        type : String,
        unique : true
    },
    guid : {
        type : String
    },
    title : {
        type : String
    },
    link : {
        type : String
    },
    thumbnail : {
        type : String
    },
    description : {
        type : String
    },
    source : {
        type : String
    },
    category : {
        type : String
    }
}, {timestamps : true})

const Article = mongoose.model('Article',articleSchema)

module.exports = Article