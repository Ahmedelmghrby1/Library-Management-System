import { model, Schema, Types } from "mongoose";

const schema =new Schema({
    book: { type: Types.ObjectId, ref: 'Book', required: true },
    patron: { type: Types.ObjectId, ref: 'Patron', required: true },
    borrowDate: { type: Date},
    returnDate: { type: Date }
},
{
    timestamps:true,
    versionKey:false,
})

export const BorrowingRecord = model ('BorrowingRecord', schema)