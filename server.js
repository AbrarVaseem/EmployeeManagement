const express = require("express");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const EmployeeRoutes = require("./routes/EmployeeRoutes");

dotEnv.config();
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => {
    console.log("Successfully connected to DB");
  })
  .catch((e) => {
    console.log(e, "Error in connecting to DB");
  });

app.use("/employees", EmployeeRoutes);

app.listen(5000, () => {
  console.log("Server is Up!");
});
