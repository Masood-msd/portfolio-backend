import jwt from 'jsonwebtoken'
import UserData from '../models/usersmodel.js';

const usermiddleware = async (req,res,next) => {

     const token = req.header("Authorization");
     if(!token)
          return res.status(400).json({msg: "Unauthorized user .. please valid your token or login again"}) 
     const jwtToken = token.replace("Bearer", "").trim()
     try {
          const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY)

          const dataVerified = await UserData.findOne( {email : isVerified.email}).select({password : 0})
          //console.log("data from midleware", dataVerified)

           req.user = dataVerified
           req.token = token
           req.userId = dataVerified._id;

          next()
     } catch (error) {
          res.status(401).json({msg: "Unauthorized . Please login again"})
          console.log(error)
     }
     
}
export default usermiddleware;