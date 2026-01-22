
const tableBody = document.getElementById("repotable");
const usernameSpan = document.getElementById("user");
const repoCountSpan = document.getElementById("reponum");

async function loadGitHubData() {
  try {
    const response = await fetch("/api/github");
    const data = await response.json();

    
    usernameSpan.textContent = data.username;
    repoCountSpan.textContent = data.repoCount;

    
    data.repos.forEach(repo => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = repo.name;

      const starsCell = document.createElement("td");
      starsCell.textContent = repo.stars;

      row.appendChild(nameCell);
      row.appendChild(starsCell);
      tableBody.appendChild(row);
    });

  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadGitHubData);

