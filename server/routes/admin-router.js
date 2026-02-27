import express from "express";
import adminController from "../controllers/admin-controller.js"
import usermiddleware from "../middlewares/usermiddleware.js";
import AdminMiddleware from "../middlewares/admin-middleware.js";

const router = express.Router()

router.route("/users").get(usermiddleware, AdminMiddleware, adminController.getAllUsers)
router.route("/users/:id").get(usermiddleware, AdminMiddleware, adminController.getUserById)
router.route("/users/update/:id").patch(usermiddleware, AdminMiddleware, adminController.getUpdatedDataById)
router.route("/users/delete/:id").delete(usermiddleware, AdminMiddleware, adminController.deleteUser)
router.route("/contact").get(usermiddleware, AdminMiddleware, adminController.getAllContacts)
router.route("/contact/delete/:id").delete(usermiddleware, AdminMiddleware, adminController.deleteUserMessage)


export default router