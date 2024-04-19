const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "a category must have a name"],
  },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;

// // // // get products update products add products delete specific
