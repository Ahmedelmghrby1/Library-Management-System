import { Router } from "express";
import { addPatron, allPatron, deletePatron, getPatron, updatePatron } from "./patron.controller.js";
import { verifyToken } from "../../Middlewares/verifyToken.js";
import { validate } from "../../Middlewares/validation.js";
import { addPatronVal, updatePatronVal } from "./patron.validation.js";

const patronRouter = Router()

patronRouter
.route('/')
.post(verifyToken,validate(addPatronVal),addPatron)
.get(verifyToken,allPatron)

patronRouter
.route('/:id')
.get(verifyToken,getPatron)
.put(verifyToken,validate(updatePatronVal),updatePatron)
.delete(verifyToken,deletePatron)

export default patronRouter