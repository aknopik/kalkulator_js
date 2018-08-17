'use strict';
var result = document.querySelector('.result');
function calc(e) 
{
var inputValue = e.value;

if(inputValue == "AC") 
{
    result.value = '';
}
else if(inputValue == "=") {
    result.value = eval(result.value);
}else {
    result.value += inputValue;
}
};