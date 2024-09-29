import https from "https";

export const forkRepoOnGithub = (repoUrl: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const [owner, repo] = repoUrl.split("/").slice(-2);

    const options = {
      hostname: "api.github.com",
      path: `/repos/${owner}/${repo}/forks`,
      method: "POST",
      header: {
        "User-Agent": "Node.js",
        Authorization: `token YOUR_GITHUB_ACCESS_TOKEN`,
        Accept: "application/vnd.github.v3+json",
      },
    };

    const req = https.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => (data += chunk));

      res.on("end", () => {
        if (res.statusCode === 202) {
          const jsonResponse = JSON.parse(data);
          resolve(jsonResponse.html_url);
        } else {
          reject(new Error(`GitHub API Error: ${res.statusCode}`));
        }
      });
    });

    req.on("error", (error) => reject(error));
    req.end();
  });
};
