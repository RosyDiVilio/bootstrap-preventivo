'use strict'

const calc = document.getElementById('calculator'); 
const finalPriceContainer = document.getElementById('finalPrice-container');
let select = document.getElementById('job');
select = job.value;

const projectHours = 10;
const backEnd = 20.50;
const frontEnd = 15.30;
const analysis = 33.60;
const userBack = 'BackEnd Development';
const userFront = 'FrontEnd Development';
const userAnalysis = 'Project Analysis';

let price = 0;

calc.addEventListener('submit', function (event) {
   event.preventDefault();

      if (job.value === userBack) {
         price = backEnd * projectHours;
      } else if (job.value === userFront) {
         price = frontEnd * projectHours;
      } else if (job.value === userAnalysis) {
         price = analysis * projectHours
      }

   finalPriceContainer.classList.remove('d-none');
   finalPrice.innerText = `€ ${price.toFixed(2)}`;
})