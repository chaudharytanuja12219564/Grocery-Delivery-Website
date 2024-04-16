import express from "express"
import {config} from "dotenv"
import cors from "cors"
import userRouter from "./Routes/user.route.js"
import commentRouter from "./Routes/comments.route.js"

config({
    path:"./config.env"
})

export const app = express();
app.use(express.json())
app.use(cors({
    origin: [process.env.FRONTEND_URI],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
app.use("/users",userRouter)
app.use("/comments",commentRouter)




app.get("/", (req,res)=>{
    res.send("Hello")

})


