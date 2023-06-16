const express = require('express');
const { getAllUsers, getSingleUser, CreateUsers } = require('../Contoller/UserContoller');

const userRoutes = express.Router();



//get all users endpoints
userRoutes.route("/getstudents").get(getAllUsers)


//get single user endpoints
userRoutes.get("/getone/:userId" , getSingleUser)


//create a new user
userRoutes.post("/createuser" , CreateUsers)

module.exports = userRoutes