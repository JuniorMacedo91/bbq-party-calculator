// Carne - 500 gr por pessoa  + de 4 horas - 750g
// Cerveja - 1000ml por Pessoa + 4 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 4 horas 1500ml

// Crianças valem por 0,5;

const adultInput = document.querySelector('#adultNumber');
const kidsInput = document.querySelector('#kidsNumber');
const timeInput = document.querySelector('#duration');
const calc = document.getElementById('btn-calc')
const resultBox = document.querySelector('#result-box')

calc.addEventListener('click',function() {
    const foodResult = document.createElement('div')
    foodResult.innerHTML = `<p id="food-result">${adultInput.value} Kg </p> <img src="./assets/ham-leg.png" alt="food picture"> `;
    foodResult.classList.add('result-content')

    const beerResult = document.createElement('div')
    beerResult.innerHTML = `<p id="beer">${kidsInput.value} Kg </p> <img src="./assets/beer.png" alt="beer picture"> `;
    beerResult.classList.add('result-content')

    const drinkResult = document.createElement('div')
    drinkResult.innerHTML = `<p id="softdrinks">${timeInput.value} Kg </p> <img src="./assets/softdrinks.png" alt="softdrinks picture">`
    drinkResult.classList.add('result-content')

    resultBox.appendChild(foodResult)
    resultBox.appendChild(beerResult)
    resultBox.appendChild(drinkResult)
})