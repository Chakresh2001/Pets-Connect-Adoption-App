const jwt =require("jsonwebtoken");

const userAuth=(req,res,next)=>{
    try {
       const token=req.headers.authorization?.split(" ")[1];

      if (token){
        const decoded=jwt.verify(token,"1234");

        if (decoded){
            
            req.body.userID=decoded.userID;
            req.body.userName=decoded.userName;
            req.body.user_location=decoded.userLocation;

            next()
        }else{
          return res.status(200).json({msg:"token is not valid"})

        }
      }
       else{
          return res.status(200).json({msg:"token is not found"})
       }
   } 
   catch (error) {
   return res.status(404).json({error:error.message})

}

   
}
module.exports={userAuth}