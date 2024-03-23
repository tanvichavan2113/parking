const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate =require('../middleware/authenticate');
const cookieParser = require("cookie-parser")
router.use(cookieParser())

require('../db/conn');
const User = require("../models/UserSchema");

router.get('/', (req, res) => {
    res.send(`Hello world from server router`);
})

router.post('/register', async (req, res) => {
    const { name, email, vehicle, phone, password, conpassword } = req.body;

    if (!name || !email || !phone || !vehicle || !password || !conpassword) {
        return res.status(422).json({ error: "fill proper" })
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ message: "Email already exists" })
        }
        else if (password != conpassword) {
            return res.status(422).json({ message: "password are not matching" })
        }
        else {
            const user = new User({ name, email, phone, vehicle, password, conpassword })
            await user.save();

            res.status(201).json({ message: "Register successful" });

        }
        
    } catch (err) {
        console.log(err);
    }

});

router.post('/signin', async (req, res) => {
    try {

        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "plzz fill the data" })
        }
        const userLogin = await User.findOne({email:email});
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+300000),
                httpOnly:true
            });


            if(!isMatch){
                res.status(400).json({error:"user login failed(pass)"})
            }
            else{
            res.json({message:"Login successful"})
            }
        }else{
            res.status(400).json({error:"user login failed(email)"})
        }

        }catch (err) {
            console.log(err);
        }
    });


router.get('/profile',authenticate,(req,res)=>{
    console.log(`hello from profile`);
    res.send(req.rootUser)
});

module.exports = router;