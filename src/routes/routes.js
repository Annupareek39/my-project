
const express=require("express")
const route=express.Router()

const { createUser,createUser1,getUser,userId, userUpdate, deleteUser} = require("../controllers/controllers");


route.get("/getUser",getUser)
route.post("/createuser", createUser)
route.get("/userid/:userId",userId)
route.patch("/userUpdate/:id",userUpdate)
route.delete("/deleteuser/:id",deleteUser)
module.exports = route;
