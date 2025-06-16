//variables
let anyButton = document.querySelector("button");
let correctButton = document.querySelector(".correct");
let lirili1 = document.querySelector(".lirili1");
let tung2 = document.querySelector(".tung2");
let tralalero3 = document.querySelector(".tralalero3");
let bombardillo4 = document.querySelector(".bombardillo5");
let chimpanzini5 = document.querySelector(".chimpanzini5");
let tripi6 = document.querySelector(".tripi6");
let brrbrr7 = document.querySelector(".brrbrr7");
let fruli8 = document.querySelector(".fruli8");
let frigocamelo9 = document.querySelector(".frigocamelo9");
let saturnita10 = document.querySelector(".la-vaca-saturno-saturnita10");
let result = document.querySelector(".result");

let questionNumber = 1; 
var score = 0; // this is the score counter

lirili1.style.display = "block"; //shows the first question

//makes all buttons move to next question
anyButton.addEventListener("click", function(){
    if (questionNumber == 1){
        questionNumber += 1;
        lirili1.style.display = "none";
        tung2.style.display = "block";
    } else if (questionNumber == 2){
        questionNumber += 1;
        tung2.style.display = "none";
        tralalero3.style.display = "block";
    } else if (questionNumber == 3){
        questionNumber += 1;
        tralalero3.style.display = "none";
        bombardillo4.style.display = "block";
    } else if (questionNumber == 4){
        questionNumber += 1;
        bombardillo4.style.display = "none";
        chimpanzini5.style.display = "block";
    } else if (questionNumber == 5){
        questionNumber += 1;
        chimpanzini5.style.display = "none";
        tripi6.style.display = "block";
    } else if (questionNumber == 6){
        questionNumber += 1;
        tripi6.style.display = "none";
        brrbrr7.style.display = "block";
    } else if (questionNumber == 7){
        questionNumber += 1;
        brrbrr7.style.display = "none";
        fruli8.style.display = "block";
    } else if (questionNumber == 8){
        questionNumber += 1;
        fruli8.style.display = "none";
        frigocamelo9.style.display = "block";
    } else if (questionNumber == 9){
        questionNumber += 1;
        frigocamelo9.style.display = "none";
        saturnita10.style.display = "block";
    } else if (questionNumber == 10){
        questionNumber += 1;
        saturnita10.style.display = "none";
        result.style.display = "block";
    } 
});

//makes specifically the correct button add 1 to the score
correctButton.addEventListener("click", function(){
    score += 1;
});