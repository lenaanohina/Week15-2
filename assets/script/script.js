const cities = ["Москва", "Санкт-Петербург", "Нью-Йорк", "Токио"];
const temperatures = [];

for (let i = 0; i < cities.length; i++) {
  let temperature;
  let isValidNumber = false;

  while (!isValidNumber) {
    temperature = prompt("Введите температуру в городе " + cities[i]);
    isValidNumber = !isNaN(Number(temperature));

    if (!isValidNumber) {
      alert("Вы ввели неверное значение. Пожалуйста, введите число.");
    }
  }

  temperatures.push(Number(temperature));
}

const list = document.createElement("ul");
for (let i = 0; i < cities.length; i++) {
  let listItem = document.createElement("li");
  listItem.textContent = cities[i] + ": " + temperatures[i];
  list.appendChild(listItem);
}

document.body.appendChild(list);

let maxTemperature = temperatures[0];
let minTemperature = temperatures[0];

for (let i = 1; i < temperatures.length; i++) {
  let currentTemperature = temperatures[i];

  if (currentTemperature < minTemperature) {
    minTemperature = currentTemperature;
  }

  if (currentTemperature > maxTemperature) {
    maxTemperature = currentTemperature;
  }
}

document.write("Максимальная температура: " + maxTemperature + "<br>");
document.write("Минимальная температура: " + minTemperature);
