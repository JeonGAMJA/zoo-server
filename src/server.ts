import express, { Application } from "express";
import dotenv from "dotenv";
import router from "./routes/index";

dotenv.config();

const app: Application = express();
const PORT: number = Number(process.env.PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});
