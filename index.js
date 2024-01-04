const express=require('express')
const cors=require('cors')
const configureDB = require('./config/db')
const app=express()
const port=3060
app.use(express.json())
app.use(cors())


configureDB()

app.listen(port,()=>{
    console.log('server running on port',port)
})