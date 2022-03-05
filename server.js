require("dotenv").config();

const express = require("express");

const app = express();

const mongoose = require("mongoose");

//middleware
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.log(error);
});

db.once("open", () => console.log("Connected to database"));

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3000, () => console.log("Server started"));
