//VARIABLES

//button variables
let buttons = document.querySelector(".buttons");
    let choice1 = document.querySelector(".choice1");
    let choice2 = document.querySelector(".choice2");
    let choice3 = document.querySelector(".choice3");
    let choice4 = document.querySelector(".choice4");
    let next = document.querySelector(".next");

//question variables
    let lirili1 = document.querySelector(".lirili1");
    let tung2 = document.querySelector(".tung2");
    let tralalero3 = document.querySelector(".tralalero3");
    let bombardillo4 = document.querySelector(".bombardillo4");
    let chimpanzini5 = document.querySelector(".chimpanzini5");
    let tripi6 = document.querySelector(".tripi6");
    let brrbrr7 = document.querySelector(".brrbrr7");
    let fruli8 = document.querySelector(".fruli8");
    let frigocamelo9 = document.querySelector(".frigocamelo9");
    let saturnita10 = document.querySelector(".la-vaca-saturno-saturnita10");

//answer variables
    let lirili = document.querySelector(".lirili");
    let tung = document.querySelector(".tung");
    let tralalero = document.querySelector(".tralalero");
    let bombardillo = document.querySelector(".bombardillo");
    let chimpanzini = document.querySelector(".chimpanzini");
    let tripi = document.querySelector(".tripi");
    let brrbrr = document.querySelector(".brrbrr");
    let fruli = document.querySelector(".fruli");
    let frigocamelo = document.querySelector(".frigocamelo");
    let saturnita = document.querySelector(".la-vaca-saturno-saturnita");

//result variable
    let result = document.querySelector(".result");
//score counter
    let scoreCounter = document.querySelector(".score-counter");
    var score = 0;
    scoreCounter.innerHTML = "Score: " + score + "/10";
//questionNumber variable
    var questionNumber = 1; 
    
    
lirili1.style.display = "block"; //shows the first question
    
//CODING FOR THE FOUR CHOICES
    choice1.addEventListener("click", function(){
        if (questionNumber == 1){
            //correct
            score += 1;
            console.log("score:" + score);
            scoreCounter.innerHTML = "Score: " + score + "/10";
            questionNumber += 0.5;
            lirili1.style.display = "none";
            lirili.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 2){
            questionNumber += 0.5;
            tung2.style.display = "none";
            tung.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 3){
            questionNumber += 0.5;
            tralalero3.style.display = "none";
            tralalero.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 4){
            questionNumber += 0.5;
            bombardillo4.style.display = "none";
            bombardillo.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 5){
            //correct
            score += 1;
            console.log("score:" + score);
            scoreCounter.innerHTML = "Score: " + score + "/10";
            questionNumber += 0.5;
            chimpanzini5.style.display = "none";
            chimpanzini.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 6){
            //correct
            score += 1;
            console.log("score:" + score);
            scoreCounter.innerHTML = "Score: " + score + "/10";
            questionNumber += 0.5;
            tripi6.style.display = "none";
            tripi.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 7){
            //correct
            score += 1;
            console.log("score:" + score);
            scoreCounter.innerHTML = "Score: " + score + "/10";
            questionNumber += 0.5;
            brrbrr7.style.display = "none";
            brrbrr.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 8){
            questionNumber += 0.5;
            fruli8.style.display = "none";
            fruli.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 9){
            questionNumber += 0.5;
            frigocamelo9.style.display = "none";
            frigocamelo.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 10){
            questionNumber += 0.5;
            saturnita10.style.display = "none";
            saturnita.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } 
    });

    choice2.addEventListener("click", function(){
        if (questionNumber == 1){
            questionNumber += 0.5;
            lirili1.style.display = "none";
            lirili.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 2){
            questionNumber += 0.5;
            tung2.style.display = "none";
            tung.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 3){
            //correct
            score += 1;
            console.log("score:" + score);
            scoreCounter.innerHTML = "Score: " + score + "/10";
            questionNumber += 0.5;
            tralalero3.style.display = "none";
            tralalero.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 4){
            questionNumber += 0.5;
            bombardillo4.style.display = "none";
            bombardillo.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 5){
            questionNumber += 0.5;
            chimpanzini5.style.display = "none";
            chimpanzini.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 6){
            questionNumber += 0.5;
            tripi6.style.display = "none";
            tripi.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 7){
            questionNumber += 0.5;
            brrbrr7.style.display = "none";
            brrbrr.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 8){
            questionNumber += 0.5;
            fruli8.style.display = "none";
            fruli.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 9){
            //correct
            score += 1;
            console.log("score:" + score);
            scoreCounter.innerHTML = "Score: " + score + "/10";
            questionNumber += 0.5;
            frigocamelo9.style.display = "none";
            frigocamelo.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 10){
            questionNumber += 0.5;
            saturnita10.style.display = "none";
            saturnita.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } 
    });
    
    choice3.addEventListener("click", function(){
        if (questionNumber == 1){
            questionNumber += 0.5;
            lirili1.style.display = "none";
            lirili.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 2){
            //correct
            score += 1;
            console.log("score:" + score);
            scoreCounter.innerHTML = "Score: " + score + "/10";
            questionNumber += 0.5;
            tung2.style.display = "none";
            tung.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 3){
            questionNumber += 0.5;
            tralalero3.style.display = "none";
            tralalero.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 4){
            questionNumber += 0.5;
            bombardillo4.style.display = "none";
            bombardillo.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 5){
            questionNumber += 0.5;
            chimpanzini5.style.display = "none";
            chimpanzini.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 6){
            questionNumber += 0.5;
            tripi6.style.display = "none";
            tripi.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 7){
            questionNumber += 0.5;
            brrbrr7.style.display = "none";
            brrbrr.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 8){
            //correct
            score += 1;
            console.log("score:" + score);
            scoreCounter.innerHTML = "Score: " + score + "/10";
            questionNumber += 0.5;
            fruli8.style.display = "none";
            fruli.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 9){
            questionNumber += 0.5;
            frigocamelo9.style.display = "none";
            frigocamelo.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 10){
            questionNumber += 0.5;
            saturnita10.style.display = "none";
            saturnita.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } 
    });
    
    choice4.addEventListener("click", function(){
        if (questionNumber == 1){
            questionNumber += 0.5;
            lirili1.style.display = "none";
            lirili.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 2){
            questionNumber += 0.5;
            tung2.style.display = "none";
            tung.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 3){
            questionNumber += 0.5;
            tralalero3.style.display = "none";
            tralalero.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 4){
            //correct
            score += 1;
            console.log("score:" + score);
            scoreCounter.innerHTML = "Score: " + score + "/10";
            questionNumber += 0.5;
            bombardillo4.style.display = "none";
            bombardillo.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 5){
            questionNumber += 0.5;
            chimpanzini5.style.display = "none";
            chimpanzini.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 6){
            questionNumber += 0.5;
            tripi6.style.display = "none";
            tripi.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 7){
            questionNumber += 0.5;
            brrbrr7.style.display = "none";
            brrbrr.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 8){
            questionNumber += 0.5;
            fruli8.style.display = "none";
            fruli.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 9){
            questionNumber += 0.5;
            frigocamelo9.style.display = "none";
            frigocamelo.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } else if (questionNumber == 10){
            //correct
            score += 1;
            console.log("score:" + score);
            scoreCounter.innerHTML = "Score: " + score + "/10";
            questionNumber += 0.5;
            saturnita10.style.display = "none";
            saturnita.style.display = "block";
            buttons.style.display = "none";
            next.style.display = "block";
        } 
    });

//CODING FOR THE "NEXT" BUTTON
    next.addEventListener("click", function(){
        if (questionNumber == 1.5){
            questionNumber += 0.5;
            console.log("question number: " + questionNumber);
            lirili.style.display = "none";
            tung2.style.display = "block";
            buttons.style.display = "flex";
            next.style.display = "none";
            //choice text
            choice1.innerHTML = "wrong";
            choice2.innerHTML = "wrong";
            choice3.innerHTML = "Tung tung tung sahur";
            choice4.innerHTML = "wrong";
        } else if (questionNumber == 2.5){
            questionNumber += 0.5;
            console.log("question number: " + questionNumber);
            tung.style.display = "none";
            tralalero3.style.display = "block";
            buttons.style.display = "flex";
            next.style.display = "none";
            //choice text
            choice1.innerHTML = "wrong";
            choice2.innerHTML = "Tralalero tralala";
            choice3.innerHTML = "wrong";
            choice4.innerHTML = "wrong";
        } else if (questionNumber == 3.5){
            questionNumber += 0.5;
            console.log("question number: " + questionNumber);
            tralalero.style.display = "none";
            bombardillo4.style.display = "block";
            buttons.style.display = "flex";
            next.style.display = "none";
            //choice text
            choice1.innerHTML = "wrong";
            choice2.innerHTML = "wrong";
            choice3.innerHTML = "wrong";
            choice4.innerHTML = "Bombardino crocodilo";
        } else if (questionNumber == 4.5){
            questionNumber += 0.5;
            console.log("question number: " + questionNumber);
            bombardillo.style.display = "none";
            chimpanzini5.style.display = "block";
            buttons.style.display = "flex";
            next.style.display = "none";
            //choice text
            choice1.innerHTML = "Chimpanzini bananini";
            choice2.innerHTML = "wrong";
            choice3.innerHTML = "wrong";
            choice4.innerHTML = "wrong";
        } else if (questionNumber == 5.5){
            questionNumber += 0.5;
            console.log("question number: " + questionNumber);
            chimpanzini.style.display = "none";
            tripi6.style.display = "block";
            buttons.style.display = "flex";
            next.style.display = "none";
            //choice text
            choice1.innerHTML = "Trippi troppi";
            choice2.innerHTML = "wrong";
            choice3.innerHTML = "wrong";
            choice4.innerHTML = "wrong";
        } else if (questionNumber == 6.5){
            questionNumber += 0.5;
            console.log("question number: " + questionNumber);
            tripi.style.display = "none";
            brrbrr7.style.display = "block";
            buttons.style.display = "flex";
            next.style.display = "none";
            //choice text
            choice1.innerHTML = "Brr brr patapim";
            choice2.innerHTML = "wrong";
            choice3.innerHTML = "wrong";
            choice4.innerHTML = "wrong";
        } else if (questionNumber == 7.5){
            questionNumber += 0.5;
            console.log("question number: " + questionNumber);
            brrbrr.style.display = "none";
            fruli8.style.display = "block";
            buttons.style.display = "flex";
            next.style.display = "none";
            //choice text
            choice1.innerHTML = "wrong";
            choice2.innerHTML = "wrong";
            choice3.innerHTML = "Fruli frula";
            choice4.innerHTML = "wrong";
        } else if (questionNumber == 8.5){
            questionNumber += 0.5;
            console.log("question number: " + questionNumber);
            fruli.style.display = "none";
            frigocamelo9.style.display = "block";
            buttons.style.display = "flex";
            next.style.display = "none";
            //choice text
            choice1.innerHTML = "wrong";
            choice2.innerHTML = "Frigo camelo";
            choice3.innerHTML = "wrong";
            choice4.innerHTML = "wrong";
        } else if (questionNumber == 9.5){
            questionNumber += 0.5;
            console.log("question number: " + questionNumber);
            frigocamelo.style.display = "none";
            saturnita10.style.display = "block";
            buttons.style.display = "flex";
            next.style.display = "none";
            //choice text
            choice1.innerHTML = "wrong";
            choice2.innerHTML = "wrong";
            choice3.innerHTML = "wrong";
            choice4.innerHTML = "La vaca saturno saturnita";
        } else if (questionNumber == 10.5){
            questionNumber += 0.5;
            console.log("question number: " + questionNumber);
            saturnita.style.display = "none";
            buttons.style.display = "none";
            next.style.display = "none";
            
            //RESULTS
            result.style.display = "block";
            if (score <= 4){
                result.innerHTML = score + "/10? Wow, sei davvero poco colto"
            } else if (score >= 5 && score <= 8){
                result.innerHTML = "A " + score + "/10 = Avid learner"
            } else if (score == 9) {
                result.innerHTML = "9/10, very skilled and cultured individual"
            } else if (score == 10){
                result.innerHTML = "perfect score, this isn't the first time you took this is it"
            }
        } 
    });



/*incorrectButton.addEventListener("click", function(){
    console.log("click registered");
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
});*/
