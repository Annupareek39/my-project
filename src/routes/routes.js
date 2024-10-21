
const express=require("express")
const route=express.Router()

const { createUser,createUser1,getUser,userId, userUpdate, deleteUser,login} = require("../controllers/controllers");


route.get("/getUser",getUser)
route.post("/createuser", createUser)
route.get("/userid/:userId",userId)
route.post("/login" ,login)
route.patch("/userUpdate/:id",userUpdate)
route.delete("/deleteuser/:id",deleteUser)
module.exports = route;
