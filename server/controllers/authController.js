import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import Patient from "../models/Patient.js";

export const register = async (req , res)=>{
    const {name, email, password} = req.body;

    const exists = await Patient.findOne({email})
    if(exists) {
        return res.status(400).json({
            message: " Email is already registered "
        })
    }

    const hashed = await bcrypt.hash(password, 10)
    const patient = await Patient.create({name, email, password : hashed})

    const token = jwt.sign({id:patient._id}, process.env.JWT_SECRET);
    res.status(201).json({token});
}

export const login = async(req,res)=>{
    const {email, password} = req.body;

    const patient = await Patient.findOne({email})
    if(!patient) {
        return res.status(401).json({
            message : "Invalid Credentials"
        })
    }

    const match = await bcrypt.compare(password, patient.password)

    const token = jwt.sign({id : patient._id}, process.env.JWT_SECRET)
    res.status(200).json({token})
}