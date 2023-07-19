const AdminAuth = async(req,res,next)=>{

    try {
        const {email, password} = req.body

        if(email=="masai@mail.com" && password=="masai"){
            req.admin = {admin:"authorized"}
            next()
        }
        else{
            res.status(450).json({error:"Un-Authorized Access"})
        }
        
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }

}

module.exports = AdminAuth