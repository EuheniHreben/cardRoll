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
