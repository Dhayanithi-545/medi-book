import Patient from "../models/Patient.js";
import jwt from "jsonwebtoken"
export const protect = async(req , res , next) =>{
    const token=req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({
            message : "Not authorized"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await Patient.findById(decoded.id).select("-password");
        next();
    } catch (error) {
        res.status(401).json({
            message: "token failed"
        })
    }
}