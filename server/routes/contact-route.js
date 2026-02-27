import express from "express";
import contactForm from "../controllers/contact-controller.js";
import contactValidator from "../validator/contact-validator.js";
import ValidateRegister from "../middlewares/validate-middleware.js";

const router = express.Router();

router.route("/contact").post(ValidateRegister (contactValidator) ,contactForm);

export default router;
