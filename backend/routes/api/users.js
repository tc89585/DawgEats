const express = require('express');
const bcryptjs = require('bcryptjs');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const auth = require("../../middleware/auth");
const User = require('../../models/user');


// Signup Route 
userRouter.post("/signup", async (req, res) => {
    try {
        const {email, password, confirmPassword, username} = req.body;
        if (!email || !password || !username || !confirmPassword) {
            return res.status(400).json({msg: "Please enter all the required fields"})
        }
        if (password.length < 6) {
            return res
            .status(400)
            .json({msg: "Password must be at least 6 characters"});
        }
        if (confirmPassword !== password) {
            return res.status(400).json({msg: "Passwords do not match"});
        }
        const existingUser = await User.findOne({email});
        if (existingUser){
            return res
            .status(400)
            .json({msg: "User already exists"});
        }
        const hashedPassword = await bcryptjs.hash(password, 8);
        const newUser = new User({email, password: hashedPassword, username});
        const savedUser = await newUser.save();
        console.log(savedUser.username);
        res.json(savedUser.username);
    } catch (err) {
        res.status(400).json({msg: err.message});
    }
});
    u