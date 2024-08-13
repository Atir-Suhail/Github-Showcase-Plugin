const express = require("express");
const userRouter = require("./routers/UserRouter");
const product = require("./routers/product");

const cors = require("cors");

const app = express();

const port = 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use("/user", userRouter);
app.use(express.json());
app.use("/user", product);

app.listen(port, () => {
  console.log(" server started");
});

app.get("/add", (req, res) => {
  res.send("hello");
});
