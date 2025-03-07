export function renderTopPlayers(dataUrl, containerId) {
  fetch(dataUrl)
    .then((response) => response.json())
    .then((players) => {
      const container = document.getElementById(containerId);
      if (!container) return;

      container.innerHTML = ""; // Clear loading text

      const ul = document.createElement("ul");
      ul.className = "p-4 bg-gray-100 rounded-lg shadow";

      players.forEach((player) => {
        if (!player.Name) return;
        const li = document.createElement("li");
        li.className = "w-full p-4 rounded-lg shadow text-justify";
        li.textContent = `${player.Name} (${player.Level})`;
        container.appendChild(li);
      });
      if (players.length % 2 > 0) {
        const li = document.createElement("li");
        li.className = "w-full p-4 rounded-lg shadow text-justify";
        li.textContent = " ";
        container.appendChild(li);
      }
      container.appendChild(ul);
    })
    .catch((error) => {
      console.error("Failed to load player data:", error);
      const container = document.getElementById(containerId);
      if (container)
        container.textContent =
          "Some sorcery prevents us from loading the top players.";
    });
}

export function renderTopPlayer(dataUrl, containerId) {
  fetch(dataUrl)
    .then((response) => response.json())
    .then((players) => {
      const container = document.getElementById(containerId);
      if (!container) return;
      const topPlayer = players[0];
      if (!topPlayer) return;
      container.textContent = `${topPlayer.Name}`;
    })
    .catch((error) => {
      console.error("Failed to load player data:", error);
      const container = document.getElementById(containerId);
      if (container)
        container.textContent =
          "Some sorcery prevents us from loading the top players.";
    });
}
