import { Router } from "express";
import * as UserServices from "./user.service.js";

const userRouter = Router();

userRouter.get("/", async (req, res) => {
  res.status(201).json({ message: "Done-User" });
});

userRouter.post("/signup", async (req, res) => {
  const { firstName, lastName, email, age, gender } = req.body;
  /// insert Data to Tables

  const user = await UserServices.signUp({
    firstName,
    lastName,
    email,
    age,
    gender,
  });

  return res.status(201).json({ message: "Done - signUp", user });
});

userRouter.post("/findorcreate", async (req, res) => {
  const { firstName, lastName, email, age, gender } = req.body;
  /// insert Data to Tables

  const user = await UserServices.findOrCreate({
    firstName,
    lastName,
    email,
    age,
    gender,
  });

  return res.status(201).json({ message: "Done - signUp", user });
});

userRouter.get("/allusers", async (req, res) => {
  const result = await UserServices.listUsers();
  res.status(200).json({ message: "user retrive success", Users: result });
});

userRouter.get("/userwithpagenation", async (req, res) => {
  const { page, limit } = await req.query;
  const result = await UserServices.listUsersByPagenation({
    page,
    limit,
  });
  res.status(200).json({
    message: "user retrive success",
    result,
  });
});

userRouter.get("/profile/:id", async (req, res) => {
  const { id } = await req.params;

  const result = await UserServices.userById(id);
  res.status(200).json({ message: "user retrive success", Users: result });
});

export default userRouter;
