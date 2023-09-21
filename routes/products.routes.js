const express = require("express");
const mongoose= require("mongoose");
const {ProductModel} = require("../models/products.model");
const productRouter = express.Router();

productRouter.get("/", async (req,res) => {
    try {
       const allProducts = await ProductModel.find();
       res.status(200).send(allProducts)
    } catch (error) {
        console.log(error);
    res.status(400).send({ msg: error.message }); 
    }
})

productRouter.post("/addproducts", async (req,res) => {
    try {
      const data = await ProductModel.insertMany(req.body)
      
    } catch (error) {
        console.log(error);
    res.status(400).send({ msg: error.message }); 
    }
})

module.exports = {productRouter};