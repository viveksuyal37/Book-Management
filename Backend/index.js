import express from "express";
import cors from "cors";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import dotenv from "dotenv";
dotenv.config({path:"./config/.env"});
import dbConnect from "./config/dbConnect.js";
import router from "./routes/routes.js";

const PORT = process.env.PORT || 5500;
const app = express();

//fixing cors issue
app.use(cors());

//body parser
app.use(express.json());

//connect to db
dbConnect();

//including routes
app.use("/api/v1", router);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
