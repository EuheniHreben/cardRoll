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
