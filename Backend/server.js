import express from 'express'
import dotenv from "dotenv"
import { userRouter } from './Routes/userRoutes.js'
import { bookRouter } from './Routes/bookRoutes.js'
import { transactionRouter } from './Routes/transactionRoutes.js'
import { userBookDB } from './Databse/UserBookDB.js'
import { transactionDB } from './Databse/TransactionDB.js'

dotenv.config()

//DATABASES
userBookDB()
transactionDB()

const app = express()
const Port = process.env.PORT

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//ROUTES
app.use('/api/v1/user', userRouter)
app.use('/api/v1/book', bookRouter)
app.use('/api/v1/transaction', transactionRouter)

//SERVER
app.get('/', (req,res)=>{
    res.send({
        success:true,
        message:'BACKEND CONNECTED SUCCESSFULLY, PLEASE TEST ENDPOINTS'
    })
})

app.listen( Port, ()=>{
    console.log(`SERVER IS RUNNING ON PORT ${Port}`) 
})