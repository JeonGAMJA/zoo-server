import express, { Application } from "express";
import dotenv from "dotenv";
import { Request, Response } from "express";
import assignmentRoutes from "./routes/assignmentRoutes";

dotenv.config();

const app: Application = express();
const PORT: number = Number(process.env.PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(assignmentRoutes);

app.use("/", async (req: Request, res: Response) => {
  res.send("Welcome to my TypeScript-poered Node.js server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});
