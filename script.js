const adultInput = document.querySelector('#adultNumber');
const kidsInput = document.querySelector('#kidsNumber');
const timeInput = document.querySelector('#duration');
const calcBtn = document.querySelector('#btn-calc')
const resultBox = document.querySelector('#result-box')

calcBtn.addEventListener('click', function(){
    if(adultInput.value ===''|| kidsInput.value ===''|| timeInput.value ===''){
        alert('Preencha todos os campos')
    } else{
        resultBox.innerHTML = `<div class="result-content meat"><p> ${calcMeat(timeInput).toFixed(1)} Kg</p> <img src="./assets/ham-leg.png" alt=" food icon"></div>`; 
        resultBox.innerHTML += `<div class="result-content beer"><p> ${calcBeer(timeInput)} L</p> <img src="./assets/beer.png" alt="beer icon"></div>`; 
        resultBox.innerHTML += `<div class="result-content drink"><p> ${calcDrink(timeInput)} L</p> <img src="./assets/softdrinks.png" alt="drinks icon"></div>`;
    }
})

function calcMeat(timeInput){
    const meatPerFourH = 0.5;
    const meatPermoreH = 0.65;

    if(timeInput.value <= 4){
       return (meatPerFourH * adultInput.value) + (kidsInput.value * (meatPerFourH / 2));
    } 
    else {
        return (meatPermoreH * adultInput.value) + (kidsInput.value * (meatPermoreH / 2));
    }
}   

function calcBeer(timeInput){
    const beerPerFourH = 1.200;
    const beerPermoreH = 2.000;

    if(timeInput.value <=4){
        return (beerPerFourH * adultInput.value)
    } else{
        return ( beerPermoreH * adultInput.value)
    }
}

function calcDrink(timeInput){
    const drinkPerFourH = 1.000;
    const drinkPermoreH = 1.500;

    if(timeInput.value <=4){
        return (drinkPerFourH * Number(adultInput.value) + Number(kidsInput.value) * drinkPerFourH / 2)
    } else{
        return (drinkPermoreH * Number(adultInput.value) + Number(kidsInput.value) * drinkPermoreH / 2)
    }
}
