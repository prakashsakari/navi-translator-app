var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/navi.json";

function getTranslationURL(userInput){
    return serverURL + "?" + "text=" + userInput;
}

function errorHandler(error){
    alert("something went wrong, please try again after some time.")
}

function clickHandler(){
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;
        })
        .catch(errorHandler);

}

btnTranslate.addEventListener("click", clickHandler);