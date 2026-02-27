import express from "express";
import controllerAuth from "../controllers/auth-controller.js";
import ValidateRegister from "../middlewares/validate-middleware.js";
import RegisterValidator from "../validator/register-validator.js";
import LoginValidator from "../validator/login-validator.js";
import usermiddleware from "../middlewares/usermiddleware.js";
const router = express.Router();

router.route("/").get(controllerAuth.home);
router
  .route("/register")
  .post(ValidateRegister(RegisterValidator), controllerAuth.register);
router
  .route("/login")
  .post(ValidateRegister(LoginValidator), controllerAuth.login);
router
  .route("/user")
  .get(usermiddleware ,controllerAuth.User);
export default router;  
