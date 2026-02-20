

import userModel from "../models/user.model.js";
const checkUser=async function (req,res) {
    const user=await userModel.create({
        userName:"amir",
        age:17,
        email:"a@a.com"
    })
    console.log("user created");
    res.send(user)
};
export default checkUser;
