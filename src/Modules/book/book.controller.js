// import slugify from "slugify";
import { Book } from "../../../Database/Models/book.model.js";
import { catchError } from "../../Middlewares/catchError.js";
import { ApiFeatures } from "../../utils/apiFeatures.js";
import { AppError } from "../../utils/appError.js";
import { deleteOne } from "../handlers/handlers.js";

// add category
const addBook = catchError(async (req, res, next) => {
  let book = new Book(req.body);
  await book.save();
  res.status(200).json({ message: "Book added successfully", book });
});
// all Book
const allBook = catchError(async (req, res, next) => {
  let apiFeatures = new ApiFeatures(Book.find(), req.query)
    .pagination()
    .sort()
    .fields()
    .filter()
    .search();
  let book = await apiFeatures.mongooseQuery;
  res
    .status(200)
    .json({ message: "success", page: apiFeatures.pageNumber, book });
});

// get Book
const getBook = catchError(async (req, res, next) => {
  let book = await Book.findById(req.params.id);
  book || next(new AppError("Book not found", 404));
  !book || res.status(200).json({ message: "success", book });
});
// update Book
const updateBook = catchError(async (req, res, next) => {
  let book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  book || next(new AppError("Book not found", 404));
  !book || res.status(200).json({ message: "success", book });
});
// delete Book
const deleteBook = deleteOne(Book);

export { addBook, allBook, getBook, updateBook, deleteBook };
