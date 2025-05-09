// document.addEventListener('DOMContentLoaded', function () {
//   const cardFront = document.querySelectorAll('.card-front');
//   const cardBack = document.querySelectorAll('.card-back');
//   const cardWrappers = document.querySelectorAll('.card-wrapper');

//   cardBack.addEventListener('click', function () {
//     const card = wrapper.querySelector('.card');
//     card.classList.toggle('flipped');
//   });

//   cardFront.addEventListener('click', function () {
//     const card = wrapper.querySelector('.card');
//     card.classList.toggle('flipped');
//   });

//   cardWrappers.forEach(wrapper => {
//     wrapper.addEventListener('click', function () {
//       const card = wrapper.querySelector('.card');
//       card.classList.toggle('flipped');
//     });
//   });
// });

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

const colorMusicBtn = document.getElementById("color-music");

colorMusicBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  document.body.classList.toggle("active");
  document.body.classList.contains("active")
    ? (colorMusicBtn.textContent = "Turn Off backlight")
    : (colorMusicBtn.textContent = "Turn On backlight");
});

setInterval(() => {
  const card = document.querySelector(".card");
  card.classList.add("auto-rotate");
  setTimeout(() => {
    card.classList.remove("auto-rotate");
  }, 6000);
}, 30000);

const shareData = {
  title: "Abmёtka Production Company",
  url: "https://euhenihreben.github.io/cardRoll/",
};

const btnUrl = document.getElementById("btnUrl");

btnUrl.addEventListener("click", async (e) => {
  e.stopPropagation();
  try {
    await navigator.share(shareData);
  } catch (err) {
    console.log(err);
  }
});
