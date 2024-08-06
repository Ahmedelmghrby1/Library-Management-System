import { Router } from "express";
import { addBook, allBook, deleteBook, getBook, updateBook } from "./book.controller.js";
import { verifyToken } from "../../Middlewares/verifyToken.js";

const bookRouter = Router()

bookRouter
.route('/')
.post(verifyToken,addBook)
.get(allBook)

bookRouter
.route('/:id')
.get(getBook)
.put(verifyToken,updateBook)
.delete(verifyToken,deleteBook)

export default bookRouter