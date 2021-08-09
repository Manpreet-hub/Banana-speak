var btnTranslate=document.querySelector("#btn-translate");
var inputtxt=document.querySelector("#txt-input");
var output=document.querySelector("#output");

//var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverUrl="https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverUrl+ "?"+ "text=" +text
}

function errorHandler(error){
    console.log("error occured ",error);
    alert("Something wrong! try again after some time")
}
btnTranslate.addEventListener("click", function clickEventHandler(){
    // output.innerText="adklnkfans"+ inputtxt.value;

    var inputText=inputtxt.value; //taking input

    fetch(getTranslationURL(inputText))
    .then(response=> response.json())
    .then(json=>{
        var translatedText=json.contents.translated;
        output.innerText=translatedText; //taking output
        })
    .catch(errorHandler)

    // .then(response => response.json()).then(JSON => output.innerText=JSON.contents.translated).catch(error => console.log(error));
});