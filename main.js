let display = document.querySelector('.js-input');
let result = '';
console.log(display.innerHTML);



function getData(button){
      let value = button.innerHTML;
      result += value;
      display.innerHTML = result;
      console.log(result); 
}

function popString(){
      result = result.slice(0, -1);
      display.innerHTML = result;
}
