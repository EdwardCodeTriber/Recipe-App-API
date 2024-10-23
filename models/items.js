import mongoose, { mongo } from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    ingredients:{String, required: true},
    category: {type: String, required: true},
    serving: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now()}

})

export default mongoose.model("Item", itemSchema)
