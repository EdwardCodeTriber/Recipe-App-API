import express from "express"
import createReceipe from "../controllers/receipeController.js";

const router = express.Router()

router.post("/reciepe", createReceipe)

export default router;