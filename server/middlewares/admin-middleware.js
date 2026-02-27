const AdminMiddleware = async (req, res, next) =>{
     try {
         const adminRole = req.user.isAdmin

         if(!adminRole){
          return res.status(403).json({message : "Access denied. User is not admin"})
         }
         next()
     } catch (error) {
          console.log(error)
          next(error)
     }
}
export default AdminMiddleware