
const express=require("express")
const route=express.Router()

const { createUser,getUser,userId, userUpdate} = require("../controllers/controllers");


route.get("/getUser",getUser)
route.post("/createuser", createUser)
route.get("/userid/:userId",userId)
route.put("/userUpdate/:userUpdate",userUpdate)
module.exports = route;
