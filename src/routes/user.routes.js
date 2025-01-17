import { Router } from "express"
import { registerUser } from "../controllers/user.controller.js"

const userRoutes = Router()

userRoutes.post("/register", registerUser)
// userRoutes.post("/login", login)

export default userRoutes