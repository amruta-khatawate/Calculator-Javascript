let display = document.querySelector('.js-input');
let result = '';
console.log(display.innerHTML);



function getData(button){
      let value = button.innerHTML;
      result += value;
      displayResult();
      console.log(result); 
}

//function to remove string or backspace functionality
function popString(){
      result = result.slice(0, -1);
      displayResult();
}


//triggered when equal button is clicked
function displayResult(){
            display.innerHTML = result;
}


function darkMode(){

      let modes = document.querySelector('.container');
      
      if(document.querySelector('.lightDark').innerHTML === 'Light'){
            document.querySelector('.lightDark').innerHTML = 'Dark';
            modes.classList.add('mode');            
      } else if(document.querySelector('.lightDark').innerHTML === 'Dark'){
            document.querySelector('.lightDark').innerHTML = 'Light';
            modes.classList.remove('mode');
            
      }



}
