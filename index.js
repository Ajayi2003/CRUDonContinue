const express = require("express")
const Database = require("./Config/database")
const userRoutes= require("./Routes/UserRoutes")

const port = 3901
const app = express()
app.use(express.json())
Database()


//linking routes to index
app.use("/api" ,userRoutes)

app.get("/",(req,res)=>{
    try {
        return res.status(200).json({
            message: "We don start work"
        })
        
    } catch (error) {
        return error 
    }

})

app.listen(port,()=>{
    console.log("Server is on", port)

})