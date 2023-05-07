const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
// const stripeRoute = require("./routes/stripe");
const cors = require("cors");




//mongoose.set('strictQuery', false)
mongoose
  .connect("mongodb+srv://rohanfatehchandka:12345@inheritance.1wg2wry.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());

 app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
// app.use("/api/checkout", stripeRoute);


app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});