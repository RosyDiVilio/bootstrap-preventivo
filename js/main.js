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
const saleNames = ['YHDNU32','JANJC63','PWKCN25','SJDPO96','POCIE24'];

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
   finalPrice.innerText = `€ ${price.toFixed(2)}`;

   //calcolo sconto
   let calcSale = (price * 25) / 100;
   let discoutPrice = (price - calcSale); 

   saleNames.forEach(function (element) {
      if (code.value === element) {
         finalPrice.innerText = `€ ${discoutPrice.toFixed(2)}`;
      } else if (code.value !== element) {
         finalPrice.innerText = `€ ${price.toFixed(2)} Il codice non è valido`;
      }
   }) 
})