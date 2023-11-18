import express from "express"
import {
    AddProduct,
    fetchAllProducts,
    fetchOneProduct,
    deleteProduct,
    updateProduct,
    fetchProductByfabricant
} from "../controllers/product.js"
const router = express.Router()

router.post("/:fabricantID", AddProduct)
router.get("/", fetchAllProducts)
router.get("/:id", fetchOneProduct)
router.get('/FabricantProduct/:fabricantID', fetchProductByfabricant)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router;