const shareData = {
  title: "Карточка-отслеживатель пробега и не только:",
  url: "https://euhenihreben.github.io/cardRoll/",
};

const btnUrl = document.getElementById("btn-url");

btnUrl.addEventListener("click", async (e) => {
  e.stopPropagation();
  try {
    await navigator.share(shareData);
  } catch (err) {
    console.log(err);
  }
});
