const express = require('express')

const { SignUp, SignIn } = require('../Controllers/User');
const { validSignUp, validation, validSignIn } = require('../Middlewares/Validator');
const { isAuth } = require('../Middlewares/isAuth');
const userRouter = express.Router()


userRouter.post('/SignUp',validSignUp,validation,SignUp)

userRouter.post('/SignIn',validSignIn,validation,SignIn)

userRouter.get('/getCurrentUser',isAuth,(req,res)=>res.send(req.user))


module.exports = userRouter