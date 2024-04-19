const Product = require("../models/productModel");
exports.ShowProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
exports.showProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
  } catch (err) {
    res.status(400).json({
      message: "tour not found",
      error: err.message,
    });
  }
};
exports.createProducts = async (req, res) => {
  try {
    const products = await Product.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
exports.updateProducts = async (req, res) => {
  try {
    const products = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
exports.deleteProducts = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
