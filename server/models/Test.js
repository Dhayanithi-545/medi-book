import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
    name:{
        type:String     
    },
    price:{
        type:Number
    }
})

export default mongoose.model("Test", testSchema)