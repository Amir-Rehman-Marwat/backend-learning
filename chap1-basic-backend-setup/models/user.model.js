import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    userName:String,
    age:Number,
    email:String
});


const userModel= mongoose.model("User",userSchema);
export default userModel;
