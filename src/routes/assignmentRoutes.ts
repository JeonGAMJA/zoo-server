import { Router, Request, Response } from "express";
import { AssignMentController } from "../controllers/assignMentController";

const assignMentController = new AssignMentController();
const assignmentRoutes: Router = Router();

assignmentRoutes.post("/assignment", assignMentController.excuteAssignment);

export default assignmentRoutes;
