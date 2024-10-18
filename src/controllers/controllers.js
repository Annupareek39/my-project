const { Error } = require("mongoose")
const userModel = require("../models/userModel")



const createUser = async (req, res) => {
   try {
      const {firstname,lastname,email, phone,password,address} = req.body

       if (!firstname){
         return res.status(400).send({ status: false, msg: "first name is required" })

       }


       if (!lastname){
         return res.status(400).send({ status: false, msg: "last name is required" })

       }


       let checkUnique = await userModel.findOne({email,phone})
       if(checkUnique){
         return res.status(400).send({ status: false, msg: "email and phone already exist" })

       }

       if (!password){
         return res.status(500).send({ status: false, msg: "password is required" })

       }

     

       const save = await userModel.create(req.body)
      return res.status(201).send({ status: true, msg: save })

   } catch (err) {
      return res.status(500).send({ status: false, msg: err.mess })
   }
}


const getUser = async (req, res) => {
   try {
      console.log(req.body);

      let fetchData = await userModel.find({})
      return res.send({ status: true, data: fetchData })
   } catch (err) {
      return res.send({ status: false, data: err })
   }
}

const userId = async (req, res) => {
   try {
      const id = req.params.userId;
      console.log(userId)
      let user = await userModel.findById(id)
      return res.send({ status: true, data: user })
   } catch (err) {
      console.log(err.message)
      return res.send({ status: false, data: err })
   }
}


const userUpdate = async (req, res) => {
   try {
      const id = req.params.id;
      const data = req.body
      let user1 = await userModel.findByIdAndUpdate(id, data)
      return res.send({ status: true, data: user1 })
   } catch (err) {
      return res.status(500).send({ status: false, data: err.message })

   }
}


const deleteUser = async (req, res) => {
   try {
      const id = req.params.id;
      let user2 = await userModel.findByIdAndDelete(id)
      return res.send({ status: true, data: user2 })
   } catch (err) {
      return res.status(500).send({ status: false, data: err.message })
   }
}

module.exports = { createUser, deleteUser, getUser, userId, userUpdate }  