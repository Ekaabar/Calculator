
var keys = document.querySelectorAll('button');
var operators = ['+', '-', '*', '/'];
var demimalAdded = false;

for (var i=0; i<keys.length; i++){
  keys[i].onclick= function(e){
      init();
    var input = document.querySelector('.display');
    console.log("input = ",input);
    var inputVal = input.innerHTML;
    console.log("inputVal = ",inputVal);
    var btnVal = this.innerHTML;
    console.log("btnVal = ",btnVal);

      
   //clear the display     
      if (btnVal == 'AC') {
          clearDisplay();
   //calculate the result
    } else if (btnVal == '=') {
      var equation = inputVal;
      var lastChar = equation[equation.length - 1];
     console.log("the lastChar=",lastChar);
      if (operators.indexOf(lastChar) > -1 || lastChar == '.')
      {equation = equation.replace(/.$/, '');}   
      console.log("equation=", equation);
      if (equation)
        input.innerHTML = eval(equation);
      console.log(input.innerHTML);
      demimalAdded = false;
    }
    
    else if(operators.indexOf(btnVal) > -1) {
       //if we enter a number as first input
      var lastChar = inputVal[inputVal.length -1];
      if (inputVal != '' && operators.indexOf(lastChar) == -1)
        input.innerHTML +=btnVal;
        //if we start with a negative number
      else if(inputVal == '' && btnVal == '-')
        input.innerHTML +=btnVal;
        //
      if(operators.indexOf(lastChar) > 1 && inputVal.length > 1) {
        input.innerHTML +=btnVal;
        //input.innerHTML = inputVal.replace(/.$/, btnVal);
          console.log(input.innerHTML);
      }
      
      demimalAdded = false;
    } else if(btnVal == '.') {
      if(!demimalAdded) {
        input.innerHTML +=btnVal;
        demimalAdded = true;
      }
    }
    else {
      input.innerHTML += btnVal;
    }
    
    e.preventDefault();
  }
}

  var clearDisplay = function(){
      
    var inp = document.querySelector('.display');
    inp.innerHTML = '0';
    demimalAdded = false;
         }
 
  
   var init = function(){
    if (document.querySelector('.display').innerHTML=='0'){
    document.querySelector('.display').innerHTML = '';
    }
}
   
