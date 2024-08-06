import { model, Schema } from "mongoose";

const schema =new Schema({
    name: { type: String, required: true },
    contactInfo: { type: String, required: true },
},
{
    timestamps:true,
    versionKey:false,
})

export const Patron = model ('Patron', schema)