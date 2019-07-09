
function fetchQ() {
    return  fetch('https://opentdb.com/api.php?amount=1&category=23')
    .then(res => res.json())
}



//// --------------  decleration --------------------/////
const triviaUl = document.querySelector('.trivia')
const choicesForm = document.querySelector('.choices')
const next = document.querySelector('.next')

let score = 0;
///// -------------  Event Litners ----------------- /////
// choicesForm.addEventListener('submit', checkedChoices)

next.addEventListener('click', nextQ)

///// -------------- Logic and Functions --------------- ///////

function nextQ() {
fetchQ().then(triviaJson)
function triviaJson(trivia) {
    // debugger
    const triviaArr = trivia.results
    for (trivia of triviaArr) {
        triviaUl.innerHTML =
            `
            <h4>Question</h4>
            <p>${trivia.question}</p>
            <div class="radio-div">
            ${displayOptions(trivia)}
            </div>
            `
        }
        choicesForm.prepend(triviaUl)





    choicesForm.addEventListener('submit', function(e, trivia) {
        e.preventDefault()
        const checked = document.querySelector('input[type=radio]:checked').value
        
     
        // debugger
        if (checked === triviaArr[0].correct_answer) { 
                 console.log("Correct")
                 ++score
             } else {
                 console.log("incorrect") 
             }
             console.log("Score = " + score)
        
    })
}

}





function displayOptions(ansArray){
    const choices = ansArray.incorrect_answers
    const correctAnswer = ansArray.correct_answer
    choices.push(correctAnswer)

    let counter = 1;
    let counter2 = 1;
    // debugger
    return choices.map(ans => {
        return `
            <input type="radio" class="${ans}" id="choice${++counter}" name="choice" value="${ans}">
            <label for="choice${++counter2}">${ans}</label><br>
        `
    }).join(" ")
}



///////// ----------- Callbacks --------------- //////////////

// function checkedChoices(e) {
    
//     e.preventDefault()
//    const checked = document.querySelector('input[type=radio]:checked').value
//     fetchQ().then((trivia) => {
        
//         debugger
//         if (checked === trivia.results[0].correct_answer) {
            
//             console.log("Correct")
//         } else {
//             console.log("incorrect") 
//         }
//     })
// }































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
