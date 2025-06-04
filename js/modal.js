const btnSettings = document.getElementById("settings");
const modalProfile = document.getElementById("myProfile");
const span = document.getElementsByClassName("close")[0];
const modalContent = document.querySelector(".modal-content--profile");

const carUserName = document.getElementById("carUserName");
const carMark = document.getElementById("carMark");
const carModel = document.getElementById("carModel");
const carCurrentMileage = document.getElementById("carCurrentMileage");
const carOilChange = document.getElementById("carOilChange");

const cardUserInput = document.getElementById("cardUserInput");
const carMarkInput = document.getElementById("cardMarkInput");
const carModelInput = document.getElementById("cardModelInput");
const carMileageInput = document.getElementById("cardMileageInput");
const carLastMileageInput = document.getElementById("cardLastMileageInput");
const btnSubmit = document.getElementById("btnSubmit");

let car = {
  user: "Mr. Abmёtka",
  mark: "Hyundai",
  model: "Solaris",
  currentMileage: 140000,
  oilChange: 150000,
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

window.addEventListener("DOMContentLoaded", () => {
  const savedCar = JSON.parse(localStorage.getItem("car"));
  if (savedCar) {
    car = savedCar;
    carRender();
  } else {
    carRender();
  }
});

function carRender() {
  if (!car) return;

  carUserName.textContent = car.user;
  carMark.textContent = car.mark;
  carModel.textContent = car.model;
  carCurrentMileage.textContent = `${car.currentMileage.toLocaleString(
    "ru-RU"
  )} km`;
  carOilChange.textContent = `${car.oilChange.toLocaleString("ru-RU")} km`;

  if (car.oilChange - car.currentMileage <= 2000) {
    carCurrentMileage.style.color = "#C2A85C";
  }
  if (car.currentMileage >= car.oilChange) {
    carCurrentMileage.style.color = "#A44A4A";
  }
  if (car.oilChange - car.currentMileage > 2000) {
    carCurrentMileage.style.color = "inherit";
  }
}

btnSettings.onclick = function (e) {
  e.stopPropagation();
  modalProfile.style.display = "flex";
  modalContent.classList.remove("hide");
  document.body.classList.add("locked");
};

span.onclick = function () {
  modalContent.classList.add("hide");
  setTimeout(() => {
    modalProfile.style.display = "none";
    document.body.classList.remove("locked");
  }, 200);
};

window.addEventListener("click", function (e) {
  if (e.target == modalProfile) {
    modalContent.classList.add("hide");
    setTimeout(() => {
      modalProfile.style.display = "none";
      document.body.classList.remove("locked");
    }, 200);
  }
});

function stringToUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  if (cardUserInput.value?.trim()) {
    car.user = stringToUpperCase(cardUserInput.value);
  }
  if (carMarkInput.value?.trim()) {
    car.mark = stringToUpperCase(carMarkInput.value);
  }
  if (carModelInput.value?.trim()) {
    car.model = stringToUpperCase(carModelInput.value);
  }
  if (carMileageInput.value?.trim() && !isNaN(carMileageInput.value)) {
    car.currentMileage = Number(carMileageInput.value);
  }
  if (carLastMileageInput.value?.trim() && !isNaN(carLastMileageInput.value)) {
    car.oilChange = Number(carLastMileageInput.value) + 8000;
  }

  localStorage.setItem("car", JSON.stringify(car));
  carRender();

  cardUserInput.value = "";
  carMarkInput.value = "";
  carModelInput.value = "";
  carMileageInput.value = "";
  carLastMileageInput.value = "";

  modalProfile.style.display = "none";
  document.body.classList.remove("locked");
});
