import UserData from "../models/usersmodel.js";
import Contact from "../models/contact-model.js";
/* -------------------------------------------------------------------------- */
/*                    To Aquire all users in admin dashbord                   */
/* -------------------------------------------------------------------------- */
const getAllUsers = async (req, res) =>{
     try {
          const usrData = await UserData.find({}, {password: 0})
          if(!usrData || usrData.length === 0){
              return res.status(400).json({message: "Error from admin-user controllers"})
          }
          return res.status(200).json(usrData)
     } catch (err) {
          console.log(err);
          next(err)
          
     }
}
/* -------------------------------------------------------------------------- */
/*                             To get all Contacts                            */
/* -------------------------------------------------------------------------- */
const getAllContacts = async (req, res) =>{
     try {
          const contactData = await Contact.find()
          if(!contactData){
             return  res.status(400).json({message: "Error from admin contact controller"})
          }
          return res.status(200).json(contactData)
     } catch (err) {
          console.log(err);
          next(err)
          
     }
}
/* -------------------------------------------------------------------------- */
/*                              Delete user logic                             */
/* -------------------------------------------------------------------------- */
const deleteUser = async (req, res) =>{
     try {
          const id = req.params.id
          await UserData.deleteOne({_id : id})
          res.status(200).json({message : "User deleted Successfully"})
     } catch (error) {
          next(error)
     }
}
/* -------------------------------------------------------------------------- */
/*                            To Edit selected user                           */
/* -------------------------------------------------------------------------- */

const getUserById = async (req, res) =>{
      try {
          const id = req.params.id
          const data = await UserData.findOne({_id : id}, {password: 0})
          res.status(200).json(data)
     } catch (error) {
          next(error)
     }
}
/* -------------------------------------------------------------------------- */
/*                    For updating Data by gathering its id                   */
/* -------------------------------------------------------------------------- */

const getUpdatedDataById = async(req, res) =>{
     try {
          const id = req.params.id
          const updatedUserData = req.body
          const UpdatedData = await UserData.updateOne({_id : id},{
               $set : updatedUserData
          })
          res.status(200).json(UpdatedData)
     } catch (error) {
          next(error)
     }
}

/* -------------------------------------------------------------------------- */
/*                        for deleting Message of user                        */
/* -------------------------------------------------------------------------- */

const deleteUserMessage = async(req, res) =>{
     try {
          const id = req.params.id
          await Contact.deleteOne({_id : id})
          res.status(200).json({message : "Message deleted Successfully"})
     } catch (error) {
          next(error)
     }
}

export default {getAllUsers, getAllContacts, deleteUser, getUserById, getUpdatedDataById, deleteUserMessage}