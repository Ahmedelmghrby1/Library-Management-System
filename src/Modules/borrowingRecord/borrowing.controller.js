import { Book } from "../../../Database/Models/book.model.js";
import { BorrowingRecord } from "../../../Database/Models/borrowingRecord.model.js";
import { Patron } from "../../../Database/Models/patron.model.js";
import { catchError } from "../../Middlewares/catchError.js";
import { AppError } from "../../utils/appError.js";


const addBorrow = catchError(async (req, res, next) => {
    const book = await Book.findById(req.params.bookId);
  const patron = await Patron.findById(req.params.patronId);
  if (!book || !patron) {
    return next(new AppError("Book or Patron not found", 404));
  }
  if(book.status== "borrowed")
    return next(new AppError("Book is allready borrowd", 409));
  const borrowingRecord = new BorrowingRecord({book: book._id , patron: patron._id})
  book.status = "borrowed"
  borrowingRecord.borrowDate = Date.now()
await book.save()
  await borrowingRecord.save();

    res.status(200).json({ message: "Book Borrowed successfully", borrowingRecord });
  });


  const returnBorrow = catchError(async (req, res, next) => {
    const book = await Book.findById(req.params.bookId);
  const patron = await Patron.findById(req.params.patronId);
  if (!book || !patron) {
    return next(new AppError("Book or Patron not found", 404));
  }
  if(book.status== "available")
    return next(new AppError("Book is allready returned", 409));
  const borrowingRecord = new BorrowingRecord({book: book._id , patron: patron._id})
  book.status = "available"
  borrowingRecord.returnDate = Date.now()
  await book.save()
  await borrowingRecord.save();

    res.status(200).json({ message: "Book returned successfully", borrowingRecord });
  });





  export{
    addBorrow,
    returnBorrow
  }