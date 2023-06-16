const mongoose = require("mongoose")


const Userschema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    isFemale:{
        type:Boolean
    },
    phoneNum:{
        type:Number
    }
})

const UserModel = mongoose.model("Student", Userschema)
module.exports= UserModel