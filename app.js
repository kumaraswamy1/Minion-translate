var txtInput =document.querySelector(".input")
var translate = document.querySelector("button")
var outputText = document.querySelector(".output")

var serverURL ="https://api.funtranslations.com/translate/minion.json";




function getTranslationURL(input){

    return serverURL + "?" + "text=" + input
}


function errorHandler(error){
    console.log("error occured",error);
    alert("hi")
}


function clickHandler() {
    var inputText=txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json=>{
        var translatedText=json.contents.translated;
        outputText.innerText= translatedText;
    })
    .catch(errorHandler)
}

translate.addEventListener('click', clickHandler)

