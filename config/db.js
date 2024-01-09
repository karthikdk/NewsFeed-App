const mongoose=require('mongoose')
const configureDB=async()=>{
    try {
        const db=await mongoose.connect('mongodb://127.0.0.1:27017/newsFeeds')
        console.log('Connected to Database')
    } catch (error) {
        console.log('Error Connecting to Database')
    }
}


module.exports=configureDB