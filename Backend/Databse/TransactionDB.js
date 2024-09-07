import mongoose from "mongoose";

export const transactionDB = async(req,res)=>{
    try {
        const connectDB = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'Transaction'
          })
        console.log(`TRANSACTION DB CONNECTED SUCCESFULLY`)
    } catch (error) {
        console.log(`ERROR WHILE CONNECTING TRANSACTION DB : ${error}`)
    }
}