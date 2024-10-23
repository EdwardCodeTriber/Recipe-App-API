import Receipes from "../models/receipes.js"

const createReceipe = async (req, res) => {
    try {
        const receipe = await Receipes.create(req.body)
        res.status(201).json(receipe)
    } catch (error) {
        res.status(500).json({error: "An Error has occured when creating a Receipe"})
    }
}

const getReceipes = async (req, res) => {
    try {
        const {page = 1, limit = 5} = req.query
        const skip = (page -1)* limit;
        const receipes = await Receipes.find().skip(skip).limit(limit)

        const totalReceipes = await Receipes.countDocuments()
        res.status(200).json({receipes, totalReceipes, page, limit})
    } catch (error) {
        console.error(error)
        res.status(500).json({error: "An error has occured when getting Receipes"})
    }
}

const getReceipe =async (req, res) => {
    try {
        const receipeId = await req.params.receipeId
        const receipe = await Receipes.findById(receipeId)
        res.status(200).json(receipe)
    } catch (error) {
        if(error.kind === "ObjectId"){
            res.status(400).json({error:"Invalid receipe ID provided"})
        } else{
            res.status(500).json({error:"An error is encounters"})
        }
    }
}

export default {createReceipe, getReceipes, getReceipe};