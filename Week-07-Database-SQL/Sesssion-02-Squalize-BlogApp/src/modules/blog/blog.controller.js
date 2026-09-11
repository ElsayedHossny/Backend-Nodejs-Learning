import { Router } from "express";
import * as blogServices from "./blog.service.js";

const blogRouter = Router();

blogRouter.get("/", (req, res) => {
  res.status(201).json({ message: "Done-Blog" });
});

blogRouter.post("/addblog", async (req, res) => {
  const { title, description, UserId } = req.body;

  const blog = await blogServices.addBlog({ title, description, UserId });
  res.status(201).json({ message: "Done - addBolg", blog });
});

blogRouter.get("/allblogs", async (req, res) => {
  const result = await blogServices.listBlogs();
  res.status(200).json({ message: "blogs retrive success", Blogs: result });
});

export default blogRouter;
