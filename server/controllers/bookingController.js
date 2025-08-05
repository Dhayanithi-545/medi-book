import Booking from "../models/Booking.js";

export const bookTest = async(req , res)=>{
    const {testId} = req.body;

    const booking = await Booking.create({
        patient : req.user._id,
        test: testId
    })
    res.status(201).json(booking)
}

export const geetBookings = async(req,res) => {
    const bookings = await Booking.find({patient :req.user._id}).populate("test")
    res.json(bookings)
}