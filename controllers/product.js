import Product from "../models/product.js";

export const AddProduct = async (req, res) => {
    const newProduct = new Product({
        ...req.body,
        fabricant: req.params.fabricantID,
    });

    try {
        const addedProduct = await newProduct.save();
        res.status(201).json(addedProduct);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const fetchAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();
        res.status(202).json(allProducts);
    } catch (error) {
        res.status(500).send(error);
    }
};
export const fetchOneProduct = async (req, res) => {
    try {
        const fetchedProduct = await Product.findById(req.params.id);
        res.status(202).json(fetchedProduct);
    } catch (error) {
        res.status(500).send(error);
    }
};
export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(202).send("deleted successfully");
    } catch (error) {
        res.status(500).send(error);
    }
};
export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id, {
                $set: req.body,
            }, {
                new: true,
            }
        );
        res.status(202).json(updatedProduct);
    } catch (error) {
        res.status(500).send(error);
    }
};
export const fetchProductByfabricant = async (req, res) => {

    try {
        const fetchedProductByFabrcant = await Product.find({
            fabricant: req.params.fabricantID
        })
        res.status(202).json(fetchedProductByFabrcant)
    } catch (error) {
        res.status(500).send(error)
    }
}