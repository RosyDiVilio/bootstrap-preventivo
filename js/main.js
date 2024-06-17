'use strict'

//importo input utente
const calc = document.getElementById('calculator'); 
const finalPriceContainer = document.getElementById('finalPrice-container');
let select = document.getElementById('job');
select = job.value;
let codeNames = document.getElementById('code');
codeNames = code.value;

//dichiarazione variabili
const projectHours = 10;
const backEnd = 20.50;
const frontEnd = 15.30;
const analysis = 33.60;
const userBack = 'BackEnd Development';
const userFront = 'FrontEnd Development';
const userAnalysis = 'Project Analysis';
const sale = 25;

let price = 0;

//calcolo preventivo
calc.addEventListener('submit', function (event) {
   event.preventDefault();

      if (job.value === userBack) {
         price = backEnd * projectHours;
      } else if (job.value === userFront) {
         price = frontEnd * projectHours;
      } else if (job.value === userAnalysis) {
         price = analysis * projectHours;
      }

   finalPriceContainer.classList.remove('d-none');
   
   //calcolo sconto
   let calcSale = (price * 25) / 100;
   let discountPrice = (price - calcSale); 

   const saleNames = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

   saleNames.forEach(function(element) {

      //calcolo sconto e colore prezzo finale
      let priceString = price.toFixed(2);
      let priceStringTwo = discountPrice.toFixed(2);
      let divide = 0;
      let divideTwo = 0;
      divide = priceString.split('.');
      divideTwo = priceStringTwo.split('.');
      let integer = divide[0];
      let decimal = divide[1];
      let integerTwo = divideTwo[0];
      let decimalTwo = divideTwo[1];

      if (saleNames.includes(code.value)) {
         finalPrice.innerText = `€ ${integerTwo}`;
         secondNumber.innerText = `,${decimalTwo}`;
      } else if (!saleNames.includes(code.value)) {
         finalPrice.innerText = `€ ${integer}`; 
         secondNumber.innerText = `,${decimal}`;
      } else if (code.value === "") {
         finalPrice.innerText = `€ ${integer}`;
         secondNumber.innerText = `,${decimal}`;
      }

   })  
   
   //validazione codice
   if (saleNames.includes(code.value) || code.value === "") {
      code.classList.add('is-valid');
      code.classList.remove('is-invalid');
   } else if (!saleNames.includes(code.value)) {
      code.classList.add('is-invalid');
      code.classList.remove('is-valid');
   } 

})