import express from "express"
const router=express.Router();
import checkUser from "../controllers/user.controller.js";
router.get("/",checkUser)
export default router;