import productModel from "../models/products.js"
import customerController from "./customerController.js";

const productController = {};

productController.getProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        return res.status(200).json(products)
    } catch (error) {
        console.log("error"+error)
        return res.status(500).json({message: "Internal server error"})
    }
};

productController.insertProducts = async (req, res) => {
    const {name, description, price, stock, categoryId, isActive} = req.body;

    const newProduct = new productModel({name, description, price, stock, categoryId, isActive});

    await newProduct.save();

    res,json({message: "Product saved"})
}

productController.updateProducts = async (req, res) => {
    try {
        let {
            name, description, price, stock, categoryId, isActive
        } = req.body;

        name = name?.trim();

        if(!name || !description || !price){
            return res.status(400).json({message: "Fields required"})
        }

        if(name.length < 3 || name.length > 20){
            return res.status(400).json({message: "Please insert a valid name"})
        }

        const productUpdated = await productModel.findByIdAndUpdate(req.params.id, {
            name, description, price, stock, categoryId, isActive                
        },
        { new: true},);
        
        if(!productUpdated){
            return res.status(404).json({message: "Product not found"})
        }
        
        return res.status(200).json({message: "Product Updated"})
    } catch (error) {
        console.log("error"+error)
        return res.status(500).json({message: "Internal server error"})
    }
};

productController.deleteProduct = async (req, res) => {
    try {
        const deleteProduct = productModel.findByIdAndDelete(req.params.id);

        if(!deleteProduct){
            return res.status(404).json({message: "Product not found"})
        }

        return res.status(200).json({message: "Product deleted"})
    } catch (error) {
        console.log("error"+error)
        return res.status(500).json({message: "Internal server error"})
    }
}

export default productController;