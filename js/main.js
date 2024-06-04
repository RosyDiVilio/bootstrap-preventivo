'use strict'

//importo input utente
const calc = document.getElementById('calculator'); 
const finalPriceContainer = document.getElementById('finalPrice-container');
let select = document.getElementById('job');
select = job.value;
let codeNames = document.getElementById('code');
codeNames = code.value;
document.getElementById('warning');

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
   finalPrice.innerText = `€ ${price.toFixed(2)}`;
   

   //calcolo sconto
   let calcSale = (price * 25) / 100;
   let discoutPrice = (price - calcSale); 

   const saleNames = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

   saleNames.forEach(function(element) {

      if (code.value === element) {
      finalPrice.innerText = `€ ${discoutPrice.toFixed(2)}`;
      } else if (!code.value === element) {
      finalPrice.innerText = `€ ${price.toFixed(2)}` ; 
    } else if (code.value === "") {
      finalPrice.innerText = `€ ${price.toFixed(2)}`;
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