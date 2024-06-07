import mongoose from "mongoose";
import { type } from "os";


const detailsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email:{type:String,required:true},
    number:{type:Number,require:true}
})

export const info = mongoose.model("info", detailsSchema)