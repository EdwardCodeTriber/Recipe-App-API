import "dotenv/config"
import express from "express"
import cors from "cors"
import connectDB from "./config/database.js";
import router from "./routes/api.js";

const app = express();
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(cors());
app.use("/api", router)

// MongoDB connection with the .env file
connectDB()

app.listen(PORT, ()=> console.log(`Server running ${PORT}`))