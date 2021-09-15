var btntranslate = document.querySelector('#btn-translate')

btntranslate.addEventListener('click', clickHandler)

function clickHandler(){
    console.log("CLICKED!");
    console.log("Input:" + txtInput.value)
}

var txtInput = document.querySelector("#txt-input");
