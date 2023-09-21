const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  type: String,
  image: [String],
  title: String,
  category: String,
  actualPrice: Number,
  loyaltyPrice: Number,
  discountedPrice: Number,
  fit: String,
  rating: Number,
},
{
  versionKey: false,
}
);

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = { ProductModel };