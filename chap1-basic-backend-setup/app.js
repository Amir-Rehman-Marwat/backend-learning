import "dotenv/config"
import app from"./server.js"
import db from "./configs/db.connectionn.js"
  import userRouter from "./routes/user.routes.js"

  app.use("/",userRouter)