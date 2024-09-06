import express from 'express'
import dotenv from "dotenv"
import { userRouter } from './Routes/userRoutes.js'
import { bookRouter } from './Routes/bookRoutes.js'
import { transactionRouter } from './Routes/transactionRoutes.js'

dotenv.config()
const app = express()
const Port = process.env.PORT

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//ROUTES
app.use('/api/v1/user', userRouter)
app.use('/api/v1/book', bookRouter)
app.use('/api/v1/transaction', transactionRouter)

app.listen( Port, ()=>{
    console.log(`SERVER RUNNIG ON PORT ${Port}`) 
})