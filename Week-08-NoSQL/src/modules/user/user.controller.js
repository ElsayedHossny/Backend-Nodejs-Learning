import { Router } from "express";
import * as UserServices from "./user.service.js";

const userRouter = Router();

userRouter.get("/", async (req, res) => {
  res.status(201).json({ message: "Done-User" });
});

export default userRouter;
