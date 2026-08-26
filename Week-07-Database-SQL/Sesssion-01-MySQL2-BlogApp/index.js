import express from "express";
const app = express();
import mysql from "mysql2/promise";

import cors from "cors";

let connection;
try {
  connection = await mysql.createConnection({
    host: 3000,
    user: "root",
    password: "1234",
    database: "Bolg",
  });
  console.log("sucess connect");
} catch (error) {
  console.log("failed connect", err);
}

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  }),
  express.json(),
);
//================================================== SignUp ========================================
app.post("/user/signUp", async (req, res) => {
  const { name, email, password, age, gender } = req.body;

  try {
    const insertQuery = `insert into User (name, email, password, age, gender) values (?,?,?,?,?)`;
    const [result] = await connection.execute(insertQuery, [
      name,
      email,
      password,
      age,
      gender,
    ]);

    console.log("Sucess Add New User");
    res.status(201).json({ message: "Sucess Add New User", User: result });
  } catch (error) {
    console.log("Error :: ", error);
    res.status(500).json({ message: "Not add User", Error: error });
  }
});

//================================================== SignIn ========================================

app.post("/user/signIn", async (req, res) => {
  const { email, password } = req.body;

  try {
    const insertQuery = `select email from User where email=? && password=?`;
    const [result] = await connection.execute(insertQuery, [email, password]);
    if (!result.length)
      return res
        .status(500)
        .json({ message: "User not define", status: false });

    console.log("result :::: ", result);
    res
      .status(201)
      .json({ message: "Sucess Login", status: true, User: result[0] });
  } catch (error) {
    console.log("Error :: ", error);
    res.status(500).json({ message: "Error in Execute " });
  }
});

//================================================== AddBolgs ======================================

app.post("/bolgs/add", async (req, res) => {
  const { title, content, UserId } = req.body;
  try {
    const insertQuery = `insert into blog_tb (title, content, UserId) values (? , ? , ?)`;

    const [result] = await connection.execute(insertQuery, [
      title,
      content,
      UserId,
    ]);
    console.log("Sucess Add New Blog");
    res
      .status(201)
      .json({ message: "Sucess Add New Blog", status: true, Blogs: result });
  } catch (error) {
    console.log("Not add Blog");
    res
      .status(500)
      .json({ message: "Not add Blog", status: false, Error: error });
  }
});

//=================================================================================================
app.listen(3000, () => {
  console.log("Server is running");
});
