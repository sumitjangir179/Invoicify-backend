import { Sequelize } from "sequelize";

const sequelize = new Sequelize("invoicify", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error in DB connection", error.message);
    process.exit(1);
  }
};

export default connectDB;
