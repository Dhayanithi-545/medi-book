import Test from "../models/Test.js";

export const getAllTests = async (req, res) => {
  const tests = await Test.find();
  res.json(tests);
};

export const addTests = async(req,res)=>{

  try {
    const {name, price} = req.body;
    
    if(!name || !price){
      return res.status(400).json({error : "Name and Price are required"})
    }
  
    const newTest = new Test({name, price})
    await newTest.save()
  
    res.status(201).json({
      message:"Test addedd successfully", test: newTest
    })
    
  } catch (error) {
    res.status(500).json({
      error:"Failed to add test"
    })
  }
}