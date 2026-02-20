import express from "express"
const app=express()
import "dotenv/config"
const PORT=process.env.PORT || 4000
app.listen(PORT,function(){
    console.log("server connected succefully")
})
export default app