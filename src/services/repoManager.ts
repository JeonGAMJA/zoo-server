import { exec } from "child_process";
import path from "path";

export const cloneRepo = (forkedRepoUrl: string): Promise<string> => {
  return new Promise((resolve: any, reject: any) => {
    const repoName = forkedRepoUrl.split("/").pop()?.replace(".git", "");
    const repoPath = path.join(__dirname, "..", "repositories", repoName || "");

    exec(`git clone ${forkedRepoUrl} ${repoPath}`, (error, stdout, stderr) => {
      if (error) {
        reject(`Error cloning repo: ${error.message}`);
        return;
      }
      resolve(repoPath);
    });
  });
};
