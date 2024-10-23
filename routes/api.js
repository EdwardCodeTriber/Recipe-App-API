import express from "express"
import receipes from "../models/receipes"

const router = express.Router()

router.post("/reciepe", receipes)

export default router;