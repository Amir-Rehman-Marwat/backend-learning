import mongoose from "mongoose";
const connection= async function (){
   try {
    await mongoose.connect('mongodb://127.0.0.1:27017/newJourney')
    console.log("data base connected");
    
   } catch (error) {
    console.log(error)
   }

}
export default connection()