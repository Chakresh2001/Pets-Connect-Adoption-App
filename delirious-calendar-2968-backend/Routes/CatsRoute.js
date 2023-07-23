const express = require('express');
const CatsModel = require('../Model/CatsModel');

const catsRoute = express.Router()

catsRoute.get("/get", async (req, res) => {
  try {
    const { q, gender, age, color, sortBy, sortOrder, page, limit } = req.query;

    const filter = {};

    // Apply search filters if provided
    if (q) {
      filter.$or = [
        { gender: { $regex: q, $options: "i" } },
        { color: { $regex: q, $options: "i" } },
      ];
    }

    if (gender) {
      filter.gender = { $regex: gender, $options: "i" };
    }
    if (age) {
      filter.age = age;
    }
    if (color) {
      filter.color = { $in: color }; // Use $in to match multiple color values
    }

    let sort = {};
    if (sortBy && sortOrder) {
      sort = { [sortBy]: sortOrder === "asc" ? 1 : -1 };
    }

    const pageNumber = parseInt(page) || 1;
    const pageSize = parseInt(limit) || 10;
    const skip = (pageNumber - 1) * pageSize;

    const catsData = await CatsModel.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(pageSize);

    const totalCatsCount = await CatsModel.countDocuments(filter);

    res.json({ cats: catsData, totalCount: totalCatsCount });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});



catsRoute.get("/get/:id", async(req,res)=>{

  try {

    const {id} = req.params

    const cat = await CatsModel.findById(id)

    res.json({cats:cat})
    
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }

})


// admin side
catsRoute.post("/add", async(req,res)=>{
    
    try {

        const updatedCats = CatsModel(req.body)

        await updatedCats.save()

        res.json({updatedCats : updatedCats})
        
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }

})


// admin side
catsRoute.patch("/patch/:id", async(req,res)=>{

    try {

        const {id} = req.params

        const updatedcats = await CatsModel.findByIdAndUpdate(id, req.body)

        res.json({message:"Updated cats"})
        
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }

})

// admin side
catsRoute.delete("/delete/:id", async(req,res)=>{

    try {

        const {id} = req.params

        const updatedcats = await CatsModel.findByIdAndDelete(id)

        res.json({message:"Deleted cats"})
        
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }

})
  

module.exports = catsRoute
