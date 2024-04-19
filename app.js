const express = require("express");
const categoryRouter = require("./routers/categoryRouter");
const productRouter = require("./routers/productRouter");
const app = express();
app.use(express.json());

app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/products", productRouter);
module.exports = app;
