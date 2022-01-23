import dotenv from "dotenv";
dotenv.config();
const { MONGO_DATABASE, MONGO_USER, MONGO_PASS, MONGO_HOST, PORT } =
  process.env;

export default {
  MONGO_DATABASE: MONGO_DATABASE || "videos-db",
  MONGO_USER: MONGO_USER || "admin",
  MONGO_PASS: MONGO_PASS || "admin",
  MONGO_HOST: MONGO_HOST || "localhost",
  PORT: PORT,
};
