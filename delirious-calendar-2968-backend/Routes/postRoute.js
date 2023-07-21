const express=require("express");
const { userAuth } = require("../Middlewares/user.auth");
const postModel = require("../Model/PostModel");


const postRouter=express.Router();

    postRouter.post("/add",userAuth,async(req,res)=>{
        try {
           
            const obj={
                pet_name:req.body.pet_name,
                pet_breed:req.body.pet_breed,
                pet_age:req.body.pet_age,
                pet_location:req.body.pet_location,
                pet_image:req.body.pet_image,
                pet_price:req.body.pet_price,

                userID:req.body.userID,
                userName:req.body.userName,
                user_location:req.body.user_location
            }
            const userpost=new postModel(obj);
                await userpost.save()

                res.status(200).json({msg:"Pet Added successfully",userpost})
        

        } catch (error) {
            res.status(400).json({error:error.message})

        }

    })


    postRouter.get("/", userAuth, async (req, res) => {
        try {
        const { userID } = req.body;

        const userPostData = await postModel.find({ userID });
        // await userPostData.save();

        res.status(200).json({ data: userPostData });

        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    });

    postRouter.delete("/delete/:postID", userAuth,async (req, res) => {
        try {
        const {postID}  = req.params;

        if (!postID) {
            return res.status(400).json({ error: "Missing postID in the request body" });
        }

        const deletedPost = await postModel.findByIdAndDelete(postID);

        if (!deletedPost) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.status(200).json({ msg: "Post deleted successfully",});
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    });
  
module.exports={postRouter}