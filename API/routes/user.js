const express = require('express');
const zod = require('zod');
const { User, Account } = require('../db/db');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { authMiddleware } = require('../middleware');
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;

const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(3).max(20),
    firstname: zod.string(),
    lastname: zod.string()
})

const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(3).max(20)
})

const userupdateSchema = zod.object({
    firstname: zod.string().optional(),
    lastname: zod.string().optional(),
    password: zod.string().min(3).max(20).optional()
});

router.get('/me', authMiddleware, async (req, res)=>{
    const userId = req.userId;
    const user = await User.findOne({_id: userId});
    if(user){
        res.status(200).json({
            firstname:user.firstname,
            lastname:user.lastname
    })
    }
    else{
        return res.status(411).json({
            message: "User not found"
        })
    }
});




router.post("/signup", async (req,res)=> {
    const  body = req.body;
    const check = signupSchema.safeParse(body);
    if(!check.success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const usercheck = await User.findOne({
        username: body.username 
    })
    if(usercheck)
    {
        return res.status(411).json({
            message: "Username or email is already exists"
        })
    }

    const addUser = await User.create(body);

    const money = 1 + Math.floor(Math.random() * 5000)
    await Account.create({
        userId: addUser._id,
        balance: money
    })

    const token = jwt.sign({userId: addUser._id}, jwtSecret)
    res.status(201).json({
        message: "User created successfully",
        user: addUser,
        token: token, 
        balance: money
    })
})

router.post('/signin',async (req, res)=>{
    const body = req.body;
    const check = signinSchema.safeParse(body);
    if(!check.success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const usercheck = await User.findOne({
        username: body.username,
        password: body.password
    })
    if(!usercheck){
        return res.status(411).json({
            message: "Error while logging in"
        })
    }
    const token = jwt.sign({userId: usercheck._id}, jwtSecret)
    res.status(201).json({
        message: "User logged in successfully", 
        token: token,
        name: usercheck.firstname + " " + usercheck.lastname
    })
})

router.put('/update',authMiddleware, async (req,res)=>{
    const body = req.body;
    const check = userupdateSchema.safeParse(body);
    if(!check.success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
   await User.updateOne({_id: req.userId}, body);
   res.status(200).json({
	message: "Updated successfully"
   })
})

router.get('/bulk', async (req, res)=>{
    const filter = req.query.filter;
    const user = await User.find({
        $or: [{
            firstname:
             { 
                "$regex": filter
             }},     //regex is for if anysubstring not only full string matches
          {
            lastname:
             { 
                "$regex": filter 
            }}
        ]
      })
      res.status(200).json({
        message: "Users fetched successfully",
        users: user
      })


})

module.exports = router;
