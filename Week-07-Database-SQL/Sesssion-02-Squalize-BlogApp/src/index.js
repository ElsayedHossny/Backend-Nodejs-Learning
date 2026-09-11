import express from "express";
import userRouter from "./modules/user/user.controller.js";
import blogRouter from "./modules/blog/blog.controller.js";
import { dbConnection } from "./DB/db.connection.js";

const app = express();

dbConnection();
// middleware To Parse body
app.use(express.json());

app.get("/", (req, res, next) => {
  try {
    res.status(200).send("Test Router.......");
  } catch (error) {
    next(error);
  }
});

////////////////////////////////////////

app.use("/bolg", blogRouter);
app.use("/user", userRouter);

////////////////////////////////////////

// handle Router Not Found
app.use((req, res) => {
  res.status(404).json({ message: "Router Not Found" });
});
// handle Error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Internal Server Error",
    error: err.message,
  });
});

app.listen(3000, (req, res) => {
  console.log("Server Running");
});
