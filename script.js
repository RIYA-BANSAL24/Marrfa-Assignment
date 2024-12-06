document.getElementById("search-button").addEventListener("click", async () => {
    const query = document.getElementById("search-box").value.trim();
    const filter = document.querySelector('input[name="filter"]:checked').value;
  
    const response = await fetch(`/search?query=${query}&filter=${filter}`);
    const results = await response.json();
  
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
  
    if (results.length === 0) {
      resultsContainer.innerHTML = "<p>No results found.</p>";
      return;
    }
  
    results.forEach((result) => {
      const div = document.createElement("div");
      div.classList.add("result");
      div.innerHTML = `<h3>${result.title}</h3><p>${result.description}</p>`;
      resultsContainer.appendChild(div);
    });
  });
  