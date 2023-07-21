const express = require('express');
const DogsModel = require('../Model/DogModel');

const dogsRoute = express.Router()


dogsRoute.get("/get", async (req, res) => {
    try {
      const { q, name, age, breed, sortBy, sortOrder, page, limit } = req.query;
  
      // Create an empty filter object
      const filter = {};
  
      // Apply search filters if provided
      if (q) {
        filter.$or = [
          { name: { $regex: q, $options: "i" } },
          { breed: { $regex: q, $options: "i" } },
        ];
      }
  
      // Apply additional filters if provided
      if (name) {
        filter.name = { $regex: name, $options: "i" };
      }
      if (age) {
        filter.age = age;
      }
      if (breed) {
        filter.breed = { $regex: breed, $options: "i" };
      }
  
      // Create the sort object based on sortBy and sortOrder parameters
      let sort = {};
      if (sortBy && sortOrder) {
        sort = { [sortBy]: sortOrder === "asc" ? 1 : -1 };
      }
  
      // Calculate skip and limit for pagination
      const pageNumber = parseInt(page) || 1;
      const pageSize = parseInt(limit) || 10;
      const skip = (pageNumber - 1) * pageSize;
  
      // Fetch dogs data with applied filters, sort, and pagination
      const dogsData = await DogsModel.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(pageSize);
  
      // Calculate total count of dogs matching the filters
      const totalDogsCount = await DogsModel.countDocuments(filter);
  
      res.json({ dogs: dogsData, totalCount: totalDogsCount });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
});


dogsRoute.get("/get/:id", async(req,res)=>{

  try {

    const {id} = req.params

    const dog = await DogsModel.findById(id)

    res.json({dog:dog})
    
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }

})
  

// admin side
dogsRoute.post("/add", async(req,res)=>{
    
    try {

        const updatedDogs = DogsModel(req.body)

        await updatedDogs.save()

        res.json({updatedDogs : updatedDogs})
        
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }

})

// admin side
dogsRoute.patch("/patch/:id", async(req,res)=>{

    try {

        const {id} = req.params

        const upatedDogsData = await DogsModel.findByIdAndUpdate(id, req.body)

        res.json({message:"Updated Dogs"})
        
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }

})

// admin side
dogsRoute.delete("/delete/:id", async(req,res)=>{

    try {

        const {id} = req.params

        const upatedDogsData = await DogsModel.findByIdAndDelete(id)

        res.json({message:"Deleted Dogs"})
        
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }

})




module.exports = dogsRoute