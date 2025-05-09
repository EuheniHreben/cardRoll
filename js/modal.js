const btnSettings = document.getElementById("settings");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

const carMark = document.getElementById("carMark");
const carModel = document.getElementById("carModel");
const carCurrentMileage = document.getElementById("carCurrentMileage");
const carOilChange = document.getElementById("carOilChange");

const carMarkInput = document.getElementById("cardMarkInput");
const carModelInput = document.getElementById("cardModelInput");
const carMileageInput = document.getElementById("cardMileageInput");
const carLastMileageInput = document.getElementById("cardLastMileageInput");
const btnSubmit = document.getElementById("btnSubmit");

btnSettings.onclick = function (e) {
  e.stopPropagation();
  modal.style.display = "flex";
  document.body.classList.add("locked");
};
span.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove("locked");
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("locked");
  }
};

let car = {
  mark: "Hyundai",
  model: "Solaris",
  currentMileage: 140000,
  oilChange: 142000,
  fuelConsumption: 7.5,
  fuelPrice: 2.6,
  calculateFuel: function (distance) {
    const fuel = Math.round((distance / 100) * this.fuelConsumption);
    const price = Math.round(fuel * this.fuelPrice);
    console.log(
      `На ${distance} км необходимо ${fuel} л топлива стоимостью ${price} BYN`
    );
  },
};

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  if (carMarkInput.value?.trim()) {
    car.mark = carMarkInput.value;
  }
  if (carModelInput.value?.trim()) {
    car.model = carModelInput.value;
  }
  if (carMileageInput.value?.trim() && !isNaN(carMileageInput.value)) {
    car.currentMileage = Number(carMileageInput.value);
  }
  if (carLastMileageInput.value?.trim() && !isNaN(carLastMileageInput.value)) {
    car.oilChange = Number(carLastMileageInput.value) + 8000;
  }

  console.log(car);

  carMark.textContent = car.mark;
  carModel.textContent = car.model;
  carCurrentMileage.textContent = `${car.currentMileage.toLocaleString(
    "en-GB"
  )} km`;
  carOilChange.textContent = `${car.oilChange.toLocaleString("en-GB")} km`;

  if (car.oilChange - car.currentMileage <= 2000) {
    carCurrentMileage.style.color = "#C2A85C";
  }
  if (car.currentMileage > car.oilChange) {
    carCurrentMileage.style.color = "#A44A4A";
  }
  if (car.oilChange - car.currentMileage > 2000) {
    carCurrentMileage.style.color = "inherit";
  }

  carMarkInput.value = "";
  carModelInput.value = "";
  carMileageInput.value = "";
  carLastMileageInput.value = "";

  modal.style.display = "none";
  body.classList.remove("locked");
});
