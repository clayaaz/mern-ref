import express from "express";
import {createProduct, deleteProduct, getProducts, updatedProdcut} from "../controllers/product.controller.js";

const router = express.Router();


router.get("/", getProducts);
router.post("/",createProduct);
router.put("/:id", updatedProdcut);
router.delete("/:id", deleteProduct);


export default router;