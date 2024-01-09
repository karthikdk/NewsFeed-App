require("dotenv").config()
const express=require('express')
const cors=require('cors')
const configureDB = require('./config/db')
const userController = require('./app/controllers/user-controller')
const task = require("./app/node-cron/cron-job")
const articlesController = require("./app/controllers/article-controller")
const authUser = require("./app/middlewares/auth")




const port=process.env.PORT || 3060

const app=express()
app.use(express.json())
app.use(cors())

configureDB()

task()

//user APIs
app.post('/api/users/register',userController.register)
app.post('/api/users/login',userController.login)
app.get('/api/users/account',authUser,userController.show)

//article API
app.get('/api/articles/list',articlesController.list)

app.listen(port,()=>{
    console.log('server running on port',port)
})

