import Work from "../models/myworkmodel.js";

const workController = async (req, res) => {
 
     try {
          const data = await Work.find();

          if(data.length === 0){
               return res.status(404).json({message: "No data found"})
          }
          res.status(200).json(data)
          
     } catch (err) {
         console.log(err);
         res.status(500).json({message : "Internal server error"})
          
     }
};

export default workController;
