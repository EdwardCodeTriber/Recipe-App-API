import Receipes from "../models/receipes.js"

const createReceipe = async (req, res) => {
    try {
        const receipe = await Receipes.create(req.body)
        res.status(201).json(receipe)
    } catch (error) {
        res.status(500).json({error: "An Error has occured when creating a Receipe"})
    }
}


export default createReceipe;