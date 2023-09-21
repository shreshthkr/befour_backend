const express = require("express");
const cors = require("cors")
const {connection}= require("./config/db");
const dotenv = require("dotenv");
const { productRouter } = require("./routes/products.routes");



const app = express()

app.use(express.json()) 
// app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/products", productRouter);

app.listen(8080, async () => {
    try {
        await connection
        console.log( "Connected to MongoDb")

    } catch (error) {
        console.log("Cannot connect to MongoDb")
    }
    console.log(`Server running on port ${8080}`)
})
