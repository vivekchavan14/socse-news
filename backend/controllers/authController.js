// ... (imports)
const authController = require('express').Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')


const jwtBlacklist = []; // Array to store blacklisted tokens

authController.post('/register', async (req, res) => {
    try {
        const isExisting = await User.findOne({email: req.body.email});
        if (isExisting) {
            throw new Error("An account with this email already exists. Please use a different email.");
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await User.create({...req.body, password: hashedPassword});

        const {password, ...others} = newUser._doc;
        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRATION || '5h'});

        return res.status(201).json({user: others, token});
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
});

authController.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if (!user) {
            throw new Error("Invalid credentials");
        }

        const comparePass = await bcrypt.compare(req.body.password, user.password);
        if (!comparePass) {
            throw new Error("Invalid credentials");
        }

        const {password, ...others} = user._doc;
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRATION || '5h'});

        return res.status(200).json({user: others, token});
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
});

authController.post('/logout', (req, res) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({message: 'Unauthorized'});
    }

    // Add the token to the blacklist (assuming you have a mechanism to check against this blacklist during authentication)
    jwtBlacklist.push(token);

    return res.status(200).json({message: 'Logout successful'});
});

module.exports = authController;
