import { Router } from "express"
import { addBorrow, returnBorrow } from "./borrowing.controller.js"
import { verifyToken } from "../../Middlewares/verifyToken.js"


const borrowRouter = Router()

borrowRouter
.route('/Borrow/:bookId/patron/:patronId')
.post(verifyToken,addBorrow)
borrowRouter
.route('/return/:bookId/patron/:patronId')
.put(verifyToken,returnBorrow)

export default borrowRouter