import { model, Schema } from "mongoose";

const schema =new Schema({
    title: { type: String, required: true },
  author: { type: String, required: true },
  publicationYear: { type: Number, required: true },
  isbn: { type: String, required: true },
  status:{type: String, enum: ["available", "borrowed"],
    default: "available"}

},
{
    timestamps:true,
    versionKey:false,
})

export const Book = model ('Book', schema)