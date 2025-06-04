const fuelBtn = document.getElementById("fuel-counter");
const fuelModal = document.getElementById("myFuel");
const closeBtn = document.getElementsByClassName("fuelModalClose")[0];
const modalFuel = document.querySelector(".modal-content--fuel");

const modalInfo = document.getElementById("resultInfo");
const distanceInput = document.getElementById("distanceInput");
const btnCount = document.getElementById("btnCount");

window.addEventListener("DOMContentLoaded", () => {
  const savedCar = JSON.parse(localStorage.getItem("car"));
  console.log(savedCar);
});

fuelBtn.onclick = function (e) {
  e.stopPropagation();
  fuelModal.style.display = "flex";
  document.body.classList.add("locked");
  modalFuel.classList.remove("hide");
};

closeBtn.onclick = function () {
  modalFuel.classList.add("hide");
  setTimeout(() => {
    fuelModal.style.display = "none";
    document.body.classList.remove("locked");
  }, 200);
};

window.addEventListener("click", function (e) {
  if (e.target == fuelModal) {
    modalFuel.classList.add("hide");
    setTimeout(() => {
      fuelModal.style.display = "none";
      document.body.classList.remove("locked");
    }, 200);
  }
});

btnCount.addEventListener("click", (e) => {
  e.preventDefault();

  let distance = 0;
  if (distanceInput.value?.trim()) {
    distance = Number(distanceInput.value);
  }

  let result = Math.floor((distance / 7.5) * 2.6);

  modalInfo.textContent = `${result} BYN`;

  distanceInput.value = "";
});
