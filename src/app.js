import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN
}))


app.use(express.json())
// app.use(express.json({limit: " 16kb"}))

app.use(express.urlencoded())
// app.use(express.urlencoded({extended:true, limit:"16kb"}))

app.use(express.static("public"))

app.use(cookieParser())

// route import
import userRoutes from "./routes/user.routes.js"

// routes declaration

app.use("/users", userRoutes)



export { app }