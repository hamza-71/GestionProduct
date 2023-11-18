import Fabricant from "../models/fabricant.js";


export const AddFabricant = async (req, res) => {
    const addedFabricant = new Fabricant(req.body)
    try {
        const newFabricant = await addedFabricant.save();
        res.status(201).json(newFabricant)
    } catch (error) {
        res.status(500).send(error)
    }
}
export const fetchAllFabricants = async (req, res) => {

    try {
        const allFabricants = await Fabricant.find()
        res.status(202).json(allFabricants)
    } catch (error) {
        res.status(500).send(error)
    }
}
export const fetchOneFabricant = async (req, res) => {

    try {
        const fetchedFabricant = await Fabricant.findById(req.params.id)
        res.status(202).json(fetchedFabricant)
    } catch (error) {
        res.status(500).send(error)
    }
}
export const deleteFabricant = async (req, res) => {

    try {
        await Fabricant.findByIdAndDelete(req.params.id)
        res.status(202).send("deleted successfully")
    } catch (error) {
        res.status(500).send(error)
    }

}
export const updateFabricant = async (req, res) => {
    try {
        const updatedFabricant = await Fabricant.findByIdAndUpdate(req.params.id, {

            $set: req.body
        }, {
            new: true
        });
        res.status(202).json(updatedFabricant)
    } catch (error) {
        res.status(500).send(error)
    }
}