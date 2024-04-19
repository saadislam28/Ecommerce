const express = require("express");
const categoryController = require("./../controllers/categoryController");
const router = express.Router();

router
  .route("/")
  .get(categoryController.ShowCategories)
  .post(categoryController.createCategories);
router
  .route("/:id")
  .get(categoryController.ShowCategory)
  .patch(categoryController.updateCategories)
  .delete(categoryController.deleteCategory);

module.exports = router;
