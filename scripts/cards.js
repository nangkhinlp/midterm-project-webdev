function loadCards() {
  fetch("assets/cards.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load card data");
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      const grid = document.getElementById("grid");

      data.cards.forEach(card => {
        const cardEl = document.createElement("div");
        cardEl.className = "card";

        cardEl.innerHTML = `
          <img src="${card.image}" alt="${card.title}" />
          <div class="card-body">
            <p class="card-title">${card.title}</p>
            <span class="tag tag-${card.tag.toLowerCase()}">${card.tag}</span>
          </div>
        `;

        grid.appendChild(cardEl);
      });
    })
    .catch(error => {
      console.error(error);
      document.getElementById("grid").innerHTML =
        "<p>Unable to load cards.</p>";
    });
}

loadCards();