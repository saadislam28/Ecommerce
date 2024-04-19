const Category = require("./../models/categoryModel");
exports.ShowCategories = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json({
      status: "success",
      data: {
        category,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
exports.ShowCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        category,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: " ",
      error: err.message,
    });
  }
};
exports.createCategories = async (req, res) => {
  try {
    const categories = await Category.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        categories,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
exports.updateCategories = async (req, res) => {
  try {
    const categories = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
