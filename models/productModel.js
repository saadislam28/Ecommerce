const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "a product must have a name"],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, "a product must have a price"],
  },
  category: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      required: [true, "a product must have a category"],
    },
  ],
  description: String,
});
productSchema.pre(/^find/, function (next) {
  this.populate({
    path: "category",
    select: "-__v",
  });
  next();
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
