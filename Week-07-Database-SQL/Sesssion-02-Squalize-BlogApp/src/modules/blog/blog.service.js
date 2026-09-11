import { Op } from "sequelize";
import Blog from "../../DB/models/blog.model.js";
import User from "../../DB/models/user.model.js";

export const addBlog = async (body) => {
  const { title, description, UserId } = body;

  const user = await User.findByPk(UserId);

  if (!user) {
    throw new Error("User doesn't exist");
  }

  return Blog.create({
    title,
    description,
    UserId,
  });
};

export const listBlogs = async () => {
  const allblogs = await Blog.findAll({
    include: {
      model: User,
      attributes: ["firstName", "lastName", "email", "age", "gender"],
    },
    attributes: {
      exclude: ["UserId", "createdAt", "updatedAt"],
    },
    // where: {
    //   title: {
    //     [Op.eq]: "Html",
    //   },
    // },
    // where: {
    //   [Op.or]: [
    //     {
    //       title: {
    //         [Op.startsWith]: "h",
    //       },
    //     },
    //     {
    //       description: {
    //         [Op.substring]: "h",
    //       },
    //     },
    //   ],
    // },
  });
  return allblogs;
};
