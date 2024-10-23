import express from "express"
import receipeController from "../controllers/receipeController.js";

const router = express.Router()

router.post("/reciepe", receipeController.createReceipe)
router.get("/reciepe", receipeController.getReceipes)
router.get("/reciepe/:id", receipeController.getReceipe)

export default router;