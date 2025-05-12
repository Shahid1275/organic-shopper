import jwt from "jsonwebtoken";

const adminAuth = async (req,res,next) =>{
    try {
         const {token} = req.headers;
        if(!token){
            return res.status(401).json({success:false, message:"Token is required"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(decoded.email !== process.env.ADMIN_EMAIL){
            return res.status(401).json({success:false, message:"Invalid token"});
        }
        next();
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:"Internal server error"});
    }
}

export default adminAuth