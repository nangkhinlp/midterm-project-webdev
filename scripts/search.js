document.getElementById("searchInput").addEventListener("input", function() {
  const searchValue = this.value.toLowerCase()

  document.querySelectorAll(".card").forEach(card => {
    const title = card.querySelector(".card-title").textContent.toLowerCase()

    if (title.includes(searchValue)) {
      card.style.display = "block"
    } else {
      card.style.display = "none"
    }
  })
})