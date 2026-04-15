import express from "express"
import productController from "../controllers/productController.js"

const router = express.Router();

router.route("/").get(productController.getProducts);

router.route("/:id")
    .put(productController.updateProducts)
    .delete(productController.deleteProduct);

    export default router;