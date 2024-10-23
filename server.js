import "dotenv/config"
import express from "express"
import cors from "cors"
import connectDB from "./config/database.js";

const app = express();
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(cors());


// MongoDB connection with the .env file
connectDB()

app.listen(PORT, ()=> console.log(`Server running ${PORT}`))