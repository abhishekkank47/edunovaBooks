import mongoose from "mongoose";

export const userBookDB = async(req,res)=>{
    try {
        const connectDB = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'UserBooks'
          })
        console.log(`USER & BOOKS DB CONNECTED SUCCESFULLY`)
    } catch (error) {
        console.log(`ERROR WHILE CONNECTING USER & BOOKS DB : ${error}`)
    }
}