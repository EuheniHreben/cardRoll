const btnSettings = document.getElementById('settings')
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const carMark = document.getElementById('carMark')
const carModel = document.getElementById('carModel')
const carMileage = document.getElementById('carMileage')
const carNextMileage = document.getElementById('carNextMileage')
const carMarkInput = document.getElementById('carMarkInput')
const carModelInput = document.getElementById('carModelInput')
const carMileageInput = document.getElementById('carMileageInput')
const carLastMileageInput = document.getElementById('carLastMileageInput')
const btnSubmit = document.getElementById('btnSubmit')
const body = document.body;

btnSettings.onclick = function(e) {
  e.stopPropagation()
  modal.style.display = "flex";  
  body.classList.add('locked');
}
span.onclick = function() {
  modal.style.display = "none";
  body.classList.remove('locked');
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.classList.remove('locked');
  }
}

let car = {
  mark: '',
  model: '',
  currentMileage: '',
  lastMileage: 0,
  nextMileage: 0,
  fuelConsumption: 7.5,
  fuelPrice: 2.6,
  calculateFuel: function (distance) {
    const fuel = Math.round((distance / 100) * this.fuelConsumption)
    const price = Math.round(fuel * this.fuelPrice)
    console.log(`На ${distance} км необходимо ${fuel} л топлива стоимостью ${price} BYN`)
  },
  displayInfo: function () {
    console.log(`${this.mark} ${this.model} ${this.year}. Пробег ${this.currentMileage.toLocaleString()} км`)
  },
  updateMileage: function (newMile) {
    if (newMile > this.currentMileage) {
      this.currentMileage = newMile
      console.log(`Общий пробег изменён на ${newMile} км`)
    } else {
      console.log('Пробег не может быть меньше текущего')
    }
    if (this.currentMileage > this.nextMileage) {
      console.log('Вам необходимо пройти сервисное обслуживание')
      this.nextMileage += this.oilChange
    } else {
      console.log('Сервисного обслуживания не требуется')
    }
  }
}

btnSubmit.addEventListener('click', e => {
  e.preventDefault()
  car.mark = carMarkInput.value
  car.model = carModelInput.value
  car.currentMileage = parseInt(carMileageInput.value)

  carMark.textContent = car.mark
  carModel.textContent = car.model
  carMileage.textContent = `${car.currentMileage} km`
  car.nextMileage = car.currentMileage + 8000
  carNextMileage.textContent = `${car.nextMileage} km`
  console.log(car)

  // car.currentMileage > car.nextMileage ? 
  // можно сделать градиент от обычного => жёлтый => красный
  // привести все названия переменных к единому стандарту
  
  carMarkInput.value = ''
  carModelInput.value = ''
  carMileageInput.value = ''
  carLastMileageInput.value = ''

  modal.style.display = "none";
  body.classList.remove('locked');
})