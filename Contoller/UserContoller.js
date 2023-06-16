const express = require("express")
const UserModel = require("../Model/userModel")



const getAllUsers = async(req,res)=>{
    try {
        const GetUsers = await UserModel.find()
        res.status(200).json({
            message: "List of Users",
            data: GetUsers
        })
        
    } catch (error) {
        return res.status(400).json({
            message:"Can't get User details"
        })
        
    }

}

const CreateUsers = async(req,res)=>{
    try {
        
        const {name,password, email,isFemale,phoneNum}= req.body
        const createsingleUser = await UserModel.create(
            {
                name,
                password,
                phoneNum,
                isFemale,
                email
            }
        )
        return res.status(404).json({
            message: "User Created",
            data: createsingleUser
        })
    } catch (error) {
        return res.status(400).json({
            message:"Can't create Users"
        })
        
    }
}

//get one user 

const getSingleUser = async (req, res) => {
    try {
        const getUsers = await UserModel.findById(req.params.userId)
        return res.status(200).json({
            message : "gotten one user",
            data : getUsers
        })
        
    } catch (error) {
        return res.status(404).json({
            message: "User not found"
        })
        
    }
}

module.exports = {getAllUsers , getSingleUser , CreateUsers}