import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Welcome to my TypeScript-poered Node.js server!");
});

export default router;
