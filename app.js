var btntranslate = document.querySelector('#btn-translate')

btntranslate.addEventListener('click', clickHandler)

function clickHandler(){
   outputDiv.innerText = txtInput.value;
}

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector('#output');


