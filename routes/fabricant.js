import express from "express"
import {
    AddFabricant,
    fetchAllFabricants,
    fetchOneFabricant,
    deleteFabricant,
    updateFabricant

} from "../controllers/fabricant.js"
const router = express.Router()

router.post("/", AddFabricant)
router.get("/", fetchAllFabricants)
router.get("/:id", fetchOneFabricant)
router.put("/:id", updateFabricant)
router.delete("/:id", deleteFabricant)
export default router;