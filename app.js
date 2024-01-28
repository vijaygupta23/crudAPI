const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/crud";
const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.on("open", () => {
  console.log("Database successfully Connected");
});

app.use(express.json())

const userRouter = require("./routes/user");

app.use("/user", userRouter);

app.listen(9000, () => {
  console.log("Server Started");
});
