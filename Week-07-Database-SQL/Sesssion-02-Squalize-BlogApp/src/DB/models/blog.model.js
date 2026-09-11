import { DataTypes, Model } from "sequelize";
import { connectSqualize } from "../db.connection.js";
import User from "./user.model.js";

class Blog extends Model {}

Blog.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { sequelize: connectSqualize, modelName: "Blog" },
);

/* 
one user has many blog
one blog belongs to one user 
*/

User.hasMany(Blog, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Blog.belongsTo(User, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export default Blog;
