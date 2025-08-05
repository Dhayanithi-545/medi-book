import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    patient:{
        type:mongoose.Schema.Types.ObjectId, ref:"Patient"
    },
    test:{
        type: mongoose.Schema.Types.ObjectId, ref :"Test"
    },
    date:{
        type: Date,
        default : Date.now
    }
})

export default mongoose.model("Booking", bookingSchema)

