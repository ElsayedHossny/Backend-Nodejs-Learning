import { DataTypes } from "sequelize";
import { connectSqualize } from "../db.connection.js";

// Create Tables by (define)
/*
model name => in this code (User)
table name => generate by squalize (1-all small , 2-add 's' at end) => (users)
*/

/* define(Model Name, Attributes Columns, options) */

const User = connectSqualize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName}_${this.lastName}`;
      },
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM,
      values: ["Male", "Female", "N/A"],
      defaultValue: "N/A",
    },
  },
  {
    indexes: [
      {
        unique: true,
        name: "idx_email",
        fields: ["email"],
      },
    ],
    timestamps: true,
    freezeTableName: true,
  },
);

export default User;
