function convertToRoman(num) {

    let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", 
                  "IV", "I"];
  
    let romanNum = "";            //"X"+"X"+"X"+"V"+"I" -> "XXXVI"
  
    for(let i = 0; i <= decimals.length; i++) {
      while (decimals[i] <= num) {
        romanNum += romans[i];
        num -= decimals[i];
      }
    }
    
   return romanNum;
}

let input = document.getElementById('quantity');
let output = document.getElementById('result');

input.onkeyup = (function(e) {
    e.preventDefault();
    let number = input.value;
    if (number <= 3999) {
        output.textContent = convertToRoman(number);
    }
    else {
        output.innerText = 'Please, enter a number less than 3999';
    }
    
    
});