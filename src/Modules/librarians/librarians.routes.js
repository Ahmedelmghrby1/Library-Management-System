import { Router } from "express";
import { checkEmail } from "../../Middlewares/checkEmail.js";
import { signin, signup } from "./librarians.controller.js";
import { validate } from "../../Middlewares/validation.js";
import { signinVal, signupVal } from "./librarians.validation.js";


const librariansRoter =Router()

librariansRoter.post('/signup',validate(signupVal),checkEmail,signup)
librariansRoter.post('/signin',validate(signinVal),signin)

export default librariansRoter