document.getElementById("filterSelect").addEventListener("change", function () {
  const value = this.value;

  document.querySelectorAll(".card").forEach(card => {
    const tag = card.querySelector(".tag").textContent.toLowerCase();
    card.style.display = (value === "all" || tag === value) ? "block" : "none";
  });
});