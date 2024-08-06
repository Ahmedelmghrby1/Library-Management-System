// import slugify from "slugify";
import { Patron } from "../../../Database/Models/patron.model.js";
import { catchError } from "../../Middlewares/catchError.js";
import { ApiFeatures } from "../../utils/apiFeatures.js";
import { AppError } from "../../utils/appError.js";
import { deleteOne } from "../handlers/handlers.js";

// add category
const addPatron = catchError(async (req, res, next) => {
  let patron = new Patron(req.body);
  await patron.save();
  res.status(200).json({ message: "patron added successfully", patron });
});
// all patron
const allPatron = catchError(async (req, res, next) => {
  let apiFeatures = new ApiFeatures(Patron.find(), req.query)
    .pagination()
    .sort()
    .fields()
    .filter()
    .search();
  let patron = await apiFeatures.mongooseQuery;
  res
    .status(200)
    .json({ message: "success", page: apiFeatures.pageNumber, patron });
});

// get patron
const getPatron = catchError(async (req, res, next) => {
  let patron = await Patron.findById(req.params.id);
  patron || next(new AppError("patron not found", 404));
  !patron || res.status(200).json({ message: "success", patron });
});
// update patron
const updatePatron = catchError(async (req, res, next) => {
  let patron = await Patron.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  patron || next(new AppError("patron not found", 404));
  !patron || res.status(200).json({ message: "success", patron });
});
// delete patron
const deletePatron = deleteOne(Patron);

export { addPatron, allPatron, getPatron, updatePatron, deletePatron };
