const btnSettings = document.getElementById('settings')
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

const carMark = document.getElementById('cardMark')
const carModel = document.getElementById('cardModel')
const carMileage = document.getElementById('cardMileage')
const carNextMileage = document.getElementById('cardNextMileage')

const carMarkInput = document.getElementById('cardMarkInput')
const carModelInput = document.getElementById('cardModelInput')
const carMileageInput = document.getElementById('cardMileageInput')
const carLastMileageInput = document.getElementById('cardLastMileageInput')
const btnSubmit = document.getElementById('btnSubmit')
// const body = document.body;

btnSettings.onclick = function(e) {
  e.stopPropagation()
  modal.style.display = "flex";  
  document.body.classList.add('locked');
}
span.onclick = function() {
  modal.style.display = "none";
  document.body.classList.remove('locked');
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove('locked');
  }
}

let car = {
  mark: 'Hyundai',
  model: 'Solaris',
  currentMileage: 0,
  lastMileage: 0,
  nextMileage: 0,
  fuelConsumption: 7.5,
  fuelPrice: 2.6,
  calculateFuel: function (distance) {
    const fuel = Math.round((distance / 100) * this.fuelConsumption)
    const price = Math.round(fuel * this.fuelPrice)
    console.log(`На ${distance} км необходимо ${fuel} л топлива стоимостью ${price} BYN`)
  },
  updateMileage: function (newMileage) {
    if (newMileage > this.currentMileage) {
      this.currentMileage = newMileage
      console.log(`Общий пробег изменён на ${newMileage} км`)
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

  // проверка на пустые поля

  if (carMarkInput.value?.trim()) {
    car.mark = carMarkInput.value
  }

  if (carModelInput.value?.trim()) {
    car.model = carModelInput.value
  }
  
  if (carMileageInput.value?.trim() && !isNaN(carMileageInput.value)) {
    const newMileage = parseInt(carMileageInput.value)
    car.updateMileage(newMileage)
  }


  carMark.textContent = car.mark
  carModel.textContent = car.model
  carMileage.textContent = `${car.currentMileage.toLocaleString("en-GB")} km`
  car.nextMileage = car.currentMileage + 8000
  carNextMileage.textContent = `${car.nextMileage.toLocaleString("en-GB")} km`
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