const { Error } = require("mongoose")
const userModel = require("../models/userModel")

const createUser = async (req, res) => {
   try {
      console.log(req.body)
      const saveUser = await userModel.create(req.body)
      return res.send({ status: true, msg: saveUser })

   } catch (err) {
      return res.send({ status: false, msg: err.message })
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
      const id = req.put.userUpdate;
      let user1 = await userModel.findByIdAndUpdate(id, firstname, lastname)
      return res.send({ status: true, data: user1 })
   } catch (err) {
      return res.send({ status: false, data: err })

   }
}

module.exports = { createUser, getUser, userId, userUpdate }