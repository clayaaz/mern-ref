import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req,res) => {
    try {
        const prodcuts = await Product.find({});
        res.status(200).json({success:true, data:prodcuts});
    } catch (error) {
        console.log("error in fetching product")
        res.status(500).json({success:false, message:"server error"})
    }
};

export const createProduct = async (req,res) => {
    const product = req.body; //user will send the data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, message: "please provide all fields"});
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({success:true, data: newProduct});
    } catch (error) {c
        console.error("error in create product: ", error.message)
        res.status(500).json({success: false, message: "server error"});
    }
};

export const updatedProdcut = async (req,res) => {
    const {id} = req.params;
    
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success:false, message:"product not found"});
    }

    try {
       const updatedProdcut = await Product.findByIdAndUpdate(id, product, {new:true});
       res.status(200).json({success:true, data:updatedProdcut});
    } catch (error) {
        res.status(500).json({success:false, message:"server error"});
    }
}

export const deleteProduct = async (req,res) => {
    const { id } = req.params;
    
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success:false, message:"product not found"});
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"product deleted"});
    } catch (error) {
        res.status(500).json({success:false, message:"Server Error"});
    }
}