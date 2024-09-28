let inputValue = document.querySelector('.calculator.display.js-input');
let calculation = '';
console.log(inputValue.innerHTML);


function getData(button){
      calculation += button.innerHTML;
      inputValue.innerHTML = `${calculation}`; 
      console.log(calculation);
      console.log(typeof calculation);
}