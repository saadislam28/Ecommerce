const express = require("express");
const productController = require("./../controllers/productController");
const router = express.Router();

router
  .route("/")
  .get(productController.ShowProducts)
  .post(productController.createProducts);
router
  .route("/:id")
  .get(productController.showProduct)
  .delete(productController.deleteProducts)
  .patch(productController.updateProducts);
module.exports = router;
