import { Router, Request, Response } from "express";
import https from "https";

const router: Router = Router();

router.post("/assignment", (req: Request, res: Response) => {
  const { period, subject, term, proUrl } = req.body;
});
