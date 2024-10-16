const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({


        firstname: {type :String, 
            required : true},

        lastname: {type: String, 
            required : true},

        email: { type : String, 
            required : true,
            unique : true},
    
        phone: {type :String, 
            required :true, 
            unique : true, 
             }, 
        password: { type :String,
             required: true, 
            }, 
        address: {
          shipping: {
            street: {type: String, 
                required: true,
            },
            city: {type:String,
                 required: true},
            
          },
          billing: {
            street: {type :String,
                 required: true},
            city: { type :String, 
               required: true},
            
          }
        },
        
      } ,{timestamps:true}
)


const userModel = mongoose.model("user",userSchema)

module.exports = userModel