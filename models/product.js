import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    fabricant: String,
    stock: Number,
    prix: Number,
}, {
    timestamps: true
})
const Product = new mongoose.model("Product", productSchema)

export default Product;