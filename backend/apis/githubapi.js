



async function getGitHubData() {

  const { Octokit } = await import("octokit");

  const octokit = new Octokit({
    auth: process.env.PERSONAL_ACCESS_TOKEN
  });

  const user = await octokit.request("GET /user");
  const repos = await octokit.request("GET /user/repos");

  return {
    username: user.data.login,
    repoCount: repos.data.length,
    repos: repos.data.map(repo => ({
      name: repo.name,
      stars: repo.stargazers_count
    }))
  };
}

module.exports = { getGitHubData };
