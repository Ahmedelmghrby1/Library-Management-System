import { Librarians } from "../../../Database/Models/librarians.model.js";
import { catchError } from "../../Middlewares/catchError.js";
import { AppError } from "../../utils/appError.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const signup = catchError(async (req, res) => {
    let librarians = new Librarians(req.body)
     await librarians.save()
     let token = jwt.sign({librariansId: librarians._id},"ahmed")
    res.status(201).json({ message: "success", token });
  });

  const signin = catchError(async (req, res,next) => {
    let librarians = await Librarians.findOne({ email: req.body.email })
    if (librarians && bcrypt.compareSync(req.body.password, librarians.password)){
        let token = jwt.sign({ librariansId: librarians._id}, "ahmed")
       return res.json({ message: "success", token });
    }
     next(new AppError("incorrect email or password",401));
  });


  export{
    signup,
    signin,
  }