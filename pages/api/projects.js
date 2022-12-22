import { Octokit } from "@octokit/core";
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function getRepos() {
  return await octokit
    .request("GET /users/feri-irawan/repos", {
      per_page: 100,
    })
    .then(({ data }) =>
      data
        .filter(({ topics }) => topics.includes("project"))
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .map(({ name, html_url, description }) => ({
          name,
          html_url,
          description,
        }))
    );
}

export default async function handler(req, res) {
  const data = await getRepos();
  res.status(200).send(JSON.stringify(data, null, 2));
}
