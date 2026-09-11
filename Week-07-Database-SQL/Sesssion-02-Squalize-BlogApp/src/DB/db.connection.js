import { Sequelize } from "sequelize";
import dbConfig from "../Config/db.config.js";

const connectSqualize = new Sequelize(dbConfig);

const dbConnection = async () => {
  try {
    await connectSqualize.authenticate();
    await connectSqualize.sync({ alter: true, force: false });
    console.log("Connection DB");
  } catch (error) {
    console.log("Error Connection DB", error);
  }
};

export { connectSqualize, dbConnection };
