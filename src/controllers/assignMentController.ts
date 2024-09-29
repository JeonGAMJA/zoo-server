import { Request, Response } from "express";
import { forkRepoOnGithub } from "../services/githubService";
import { cloneRepo } from "../services/repoManager";
import { runJestTests } from "../services/testService";

export class AssignMentController {
  constructor() {}

  async excuteAssignment(req: Request, res: Response) {
    try {
      const { period, subject, term, repoUrl }: any = req.body;
      const forkedRepoUrl = await forkRepoOnGithub(repoUrl);
      const repoPath = await cloneRepo(forkedRepoUrl);
      const testResults = await runJestTests(repoPath);

      return res.json({ results: testResults });
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error("Error executing assignment", e);
        return res.status(500).json({
          message: "An error occurred while processing the assignment",
          error: e.message,
        });
      }
    }
  }
}
