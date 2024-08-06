import { Librarians } from "../../Database/Models/librarians.model.js";
import { AppError } from "../utils/appError.js";

const checkEmail = async (req, res, next) => {
  let isfound = await Librarians.findOne({ email: req.body.email});
  if (isfound) return next(new AppError("Email already exists",409))
  next();
};



export{
  checkEmail,
}