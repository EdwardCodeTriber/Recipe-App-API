import mongoose from "mongoose";

const receipeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    ingredients:{String},
    category: {type: String, required: true},
    serving: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now()}

})

export default mongoose.model("Receipe", receipeSchema)
