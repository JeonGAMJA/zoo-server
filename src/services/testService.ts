import { exec } from "child_process";

export const runJestTests = (repoPath: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    exec(
      `npx jest -json --outputfile=${repoPath}/test-resuts.json`,
      { cwd: repoPath },
      (error, stdout, stderr) => {
        if (error) {
          reject(`Error running tests: ${error.message}`);
          return;
        }
        resolve(stdout);
      }
    );
  });
};
