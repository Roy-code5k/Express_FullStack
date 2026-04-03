import { Router } from "express";
import { healthCheck, landingPage, createUser } from "../controllers/sample.controller.js";
 
const router = Router();
 
router.get("/health", healthCheck);
router.get("/landing", landingPage);
router.post("/create", createUser);



export default router;