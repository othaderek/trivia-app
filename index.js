/////// ----------- Global Variables ---------------- //////////
let globalTrivia; 
let score = 0;
var i = 1;
let anweredQ = [];
let incorrectQ = [];
let usernname;
let category;
let numberOfQestions;

console.log(usernname)


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
const category_number_q_options = document.querySelector('.trvia-category-q-number')
const newButton = `
<button class="next">Play</button>
`


///// ------------  Event Listner ---------------- ////////
startGame.addEventListener('click', nextQ)




////// ------------ Loop is happening here ----------------- ///////////////

function nextQ() {
    usernname = userName.value
    category = parseInt(document.querySelector('input[name=category]:checked').value)
    numberOfQestions = parseInt(document.querySelector('input[name=number]:checked').value)
    // debugger
    if (i <= numberOfQestions){
        i++
        scoreDiv.textContent = ''
        fetchQ().then(triviaJson)
        console.log(i)
    } else {
        reportPage()
    }
}



correctQDiv.style.visibility = 'hidden';
incorrectQDiv.style.visibility = 'hidden';

////-------------- fetch and dom appending is happening here ------------------/////////
    function triviaJson(trivia) {
        // startGame.remove()
        globalTrivia = trivia;

        answeredQul.innerHTML = '';
        incorrectQul.innerHTML = '';

        startGame.style.visibility = 'hidden';
        correctQDiv.style.visibility = 'hidden';
        incorrectQDiv.style.visibility = 'hidden';
        usernameDiv.style.visibility = 'hidden';
        category_number_q_options.style.visibility = 'hidden';
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
    
    scoreDiv.innerHTML = `<h2>Game Over ${usernname} - You have answered ${score} questions correct!</h2>`
    const li = document.createElement('li')

    for (q of anweredQ) {
            // debugger
        answeredQul.innerHTML += `<li>${q}</li>`
    }

    for (q of incorrectQ) {
        incorrectQul.innerHTML += `<li>${q}</li>`
    }

    // scoreDiv.appendChild(li)
    triviaUl.remove();
    startGame.style.visibility = 'visible';
    correctQDiv.style.visibility = 'visible';
    incorrectQDiv.style.visibility = 'visible';
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





///////// ----------- Callbacks --------------- //////////////

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






























// const checked = document.querySelector('input[name="choice"]:checked').value;
// console.log(checked)



// function triviaJson(){
//     fetchQ().then(trivia => function(trivia){
//         // debugger
//         console.log(trivia);
//         const triviaArr = trivia.results
//     for (trivia of triviaArr) {
//         triviaUl.innerHTML +=
//             `
//             <h4>Question</h4>
//             <p>${trivia.question}</p>
//             <div class="radio-div">
//             ${displayOptions(trivia)}
//             </div>
//             `
//         }
//         choicesForm.prepend(triviaUl)
//     })
// }
// triviaJson()
