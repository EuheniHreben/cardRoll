document.addEventListener("DOMContentLoaded", function () {
  const cardWrappers = document.querySelectorAll(".card-wrapper");
  cardWrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", function () {
      const card = wrapper.querySelector(".card");
      card.classList.toggle("flipped");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card");
  card.addEventListener("mouseenter", () => {
    if (card.classList.contains("auto-rotate")) {
      card.classList.remove("auto-rotate");
    }
  });
});
