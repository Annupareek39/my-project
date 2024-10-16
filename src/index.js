const express = require("express");
const mongoose = require('mongoose');
const route = require("./routes/routes");
const app = express();
const bodyparser = require("body-parser")

app.use(bodyparser.json())

app.use("/",route)
// app.get("/", (req,res) =>{
// res.write("hloo world bhaya!!")
// });
app.use(express.static('path'))

mongoose.connect("mongodb+srv://purohitanu39:DvzaTf5gDcA9gg7a@cluster0.vjq97.mongodb.net/practices")
.then(()=>{
    console.log("mongodb connected")
})

app.listen(8000, ()=>{
    console.log("listen the port at 8000");

});