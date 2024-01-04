require("dotenv").config()
const express=require('express')
const cors=require('cors')
const configureDB = require('./config/db')
const userController = require('./app/controllers/user-controller')
const authenticateUser = require("./app/middlewares/authenticate-user")


const port=process.env.PORT||3060

const app=express()
app.use(express.json())
app.use(cors())

configureDB()



//user APIs
app.post('/api/users/register',userController.register)
app.post('/api/users/login',userController.login)
app.get('/api/users',authenticateUser,userController.users)



app.listen(port,()=>{
    console.log('server running on port',port)
})