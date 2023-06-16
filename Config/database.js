const mongoose = require("mongoose")



const url = "mongodb://127.0.0.0:27107/DatabaseCollection"
const url2 = "mongodb://0.0.0.0:27017/DatabaseCollection"

 const Database = async()=>{
    try {
        const dbconnect = await mongoose.connect(url2)
        console.log("")
        console.log("Connected")
    } catch (error) {
        console.log("Error", error)
    }
}

module.exports = Database