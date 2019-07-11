/////// ----------- Global Variables ---------------- //////////
let globalTrivia; 
let score = 0;
var i = 1;
let anweredQ = [];
let incorrectQ = [];
let usernname;
let category;
let numberOfQuestions;




//// ------------- Fetch ------------------ ////
function fetchQ() {
    return  fetch(`https://opentdb.com/api.php?amount=1&category=${category}`)
    .then(res => res.json())
}

//// --------------  decleration --------------------/////
const triviaUl = document.querySelector('.trivia')
const choicesForm = document.querySelector('.choices')
const startGame = document.querySelector('.next')
const scoreDiv = document.querySelector('.score')
const submitBtn = document.querySelector('#submit-btn')
const buttonDiv = document.querySelector('.button-div')
const answeredQul = document.querySelector('.correctQuestions')
const incorrectQul = document.querySelector('.incorrectQuestions')
const correctQDiv = document.querySelector('.correct-div')
const incorrectQDiv = document.querySelector('.incorrect-div')
const userName = document.querySelector('input[name=user-name]')
const usernameDiv = document.querySelector('.usernameDiv')
const categoryDiv = document.querySelector('.trvia-category')
const numberDiv = document.querySelector('.number-of-quastions')
const trviaDiv = document.querySelector('.trivia-div')
const choiceDiv = document.querySelector('.choices-div')
const welcome = document.querySelector('.welcome-h1')


///// ------------  Event Listner ---------------- ////////
startGame.addEventListener('click', nextQ)



////// ------------ Loop is happening here ----------------- ///////////////

function nextQ() {
    usernname = userName.value
    category = parseInt(document.querySelector('input[name=category]:checked').value)
    numberOfQuestions = parseInt(document.querySelector('input[name=number]:checked').value)
    // debugger
    if (i <= numberOfQuestions){
        i++
        scoreDiv.textContent = ''
        fetchQ().then(triviaJson)
        console.log(i)
    } else {
        reportPage()
    }
}


////// ------ hidden comtents while playing the game ----------- ////////
correctQDiv.style.display = "none";
incorrectQDiv.style.display = "none";
trviaDiv.style.display = "none";
choiceDiv.style.display = "none";
scoreDiv.style.display = "none";

// debugger

////-------------- fetch and dom appending is happening here ------------------/////////
    function triviaJson(trivia) {
        // startGame.remove()
        globalTrivia = trivia;

        answeredQul.innerHTML = '';
        incorrectQul.innerHTML = '';
        welcome.textContent = `Hi! ${usernname}`;
        // welcome.style.font-size = 12;

        choiceDiv.style.display = "block";

        startGame.style.display = "none";
        correctQDiv.style.display = "none";
        incorrectQDiv.style.display = "none";
        usernameDiv.style.display = "none";
        categoryDiv.style.display = "none";
        numberDiv.style.display = "none";
        buttonDiv.style.display = "none";
        // debugger
        const triviaArr = trivia.results
        // debugger
        for (trivia of triviaArr) {
            triviaUl.innerHTML =
                `
                <h4>Question</h4>
                <p>${trivia.question}</p>
                <div class="radio-div">
                ${displayOptions(trivia)}
                </div>
                <input id="submit-btn" type="submit" value="Submit">
                `
        }
        choicesForm.prepend(triviaUl)
    }



    ///// ------------- Report Page ------------------- //////
function reportPage() {
    i = 0
    
    scoreDiv.innerHTML = `
    <h2>Score: ${score}</h2>
    `
    const li = document.createElement('li')
    welcome.textContent = `Thank you for playing ${usernname}!`;


    for (q of anweredQ) {
            // debugger
        answeredQul.innerHTML += `<li>${q}</li>`
    }

    for (q of incorrectQ) {
        incorrectQul.innerHTML += `<li>${q}</li>`
    }

    // scoreDiv.appendChild(li)
    triviaUl.remove();
    startGame.style.display = 'block';
    correctQDiv.style.display = 'block';
    incorrectQDiv.style.display = 'block';
    scoreDiv.style.display = "block";

    choiceDiv.style.display = "none";
    
    score = 0;
    anweredQ = [];
    
        // setTimeout(() => {
        // }, 0)
}


////--------------- flatten Array --------------- ////////
function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }

  //////// ------------ The correct and Incorrect choices are Joined to one array and are slapped to the dom ---------- ////////////
function displayOptions(ansArray){
    
    const correctAndIncorrect = []
    correctAndIncorrect.push(ansArray.incorrect_answers)
    correctAndIncorrect.push(ansArray.correct_answer)
    
    const merge3 = flatten(correctAndIncorrect);

    
    let counter = 1;
    let counter2 = 1;
    
    return merge3.map(ans => {
        return `
            <input type="radio" class="${ans}" id="choice${++counter}" name="choice" value="${ans}">
            <label for="choice${++counter2}">${ans}</label><br>
        `
    }).join(" ")
}





///////// ----------- Compare if the choice is correct or not --------------- //////////////

 choicesForm.addEventListener('submit', function(e) {
            console.log("submit happened")
            // debugger
            e.preventDefault()
            let answer = globalTrivia.results[0].correct_answer
            let checked = document.querySelector('input[type=radio]:checked').value

            if (checked === answer) { 
                // checked = "";
                    console.log("Correct")
                    score++
                    anweredQ.push(globalTrivia.results[0].question)
                    // debugger
                    nextQ()
                } else {
                    // debugger
                    incorrectQ.push(globalTrivia.results[0].question)
                    console.log("incorrect")
                    nextQ() 
                }
                console.log("Score = " + score)
        })




























