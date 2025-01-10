import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path:'./.env'
})

const PORT = process.env.PORT || 8080

connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at port ${PORT}`);    
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed !!!",err);
})















// import express from "express"
// const app = express();
// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("ERR", error)
//             throw error
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`app is listening on port ${process.env.PORT}`);  
//         })
//     } catch (error) {
//         console.log("ERROR", error)
//     }
// })()