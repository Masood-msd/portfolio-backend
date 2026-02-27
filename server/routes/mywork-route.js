import express, { Router } from "express"
import workController from "../controllers/work-controller.js";

const router = express.Router();

router.route("/work").get(workController)

export default router
