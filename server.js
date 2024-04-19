const mongoose = require("mongoose");
const dotenv = require("dotenv");

const port = 3000;
dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection successful!"));
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
