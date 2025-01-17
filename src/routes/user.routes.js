import { Router } from "express"
import { registerUser } from "../controllers/user.controller.js"
import { upload } from "../middlewares/multer.middlewares.js"

const userRoutes = Router()

userRoutes.post("/register", upload.fields([
    {
        name: "avater",
        maxCount: 1
    },
    {
        name: "coverImage",
        maxCount: 1
    },
]), registerUser)
// userRoutes.post("/login", login)

export default userRoutes