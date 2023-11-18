import mongoose from "mongoose";

const fabricantSchema = new mongoose.Schema({
    name: String,
    Address: String,
    dateFabricant: Date,

})
const Fabricant = new mongoose.model("Fabricant", fabricantSchema);
export default Fabricant;