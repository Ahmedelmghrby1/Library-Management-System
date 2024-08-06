import Joi from "joi"

const signupVal=Joi.object({
    name: Joi.string().required(),
    email:Joi.string().required().email(),
    password:Joi.string().required().min(6).max(30)
})


const signinVal=Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required().min(6).max(30),
})

export{
    signupVal,
    signinVal
}