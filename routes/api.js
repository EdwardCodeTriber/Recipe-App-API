import express from "express"
import receipeController from "../controllers/receipeController.js";

const router = express.Router()

router.post("/reciepe", receipeController.createReceipe)
router.get("/reciepe", receipeController.getReceipe)

export default router;