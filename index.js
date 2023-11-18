import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import fabricantRoutes from "./routes/fabricant.js"
import productRoutes from "./routes/product.js"
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    extended: true
}));
app.use("/fabricant", fabricantRoutes)
app.use("/product", productRoutes)
mongoose.connect("mongodb://127.0.0.1:27017/gestionDB").then(() => {
    app.listen(3000, () => {
        console.log("server running on port 3000")
    })
}).catch((error) => {
    console.log(error)
})