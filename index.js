fetch('https://opentdb.com/api.php?amount=1&category=23')
.then(res => res.json())
.then(triviaJson)



//// --------------  decleration --------------------/////
const triviaUl = document.querySelector('.trivia')
const choicesForm = document.querySelector('.choices')



///// -------------  Event Litners ----------------- /////
choicesForm.addEventListener('submit', checkedChoices)



///// -------------- Logic and Functions --------------- ///////
function triviaJson(trivia) {
    // debugger
    const triviaArr = trivia.results
    for (trivia of triviaArr) {
        triviaUl.innerHTML +=
            `
            
            <h4>Question</h4>
            <p>${trivia.question}</p>
            <div class="radio-div">
            ${displayOptions(trivia)}
            </div>
            
          
            `
        }
}

function displayOptions(ansArray){
    const choices = ansArray.incorrect_answers
    const correctAnswer = ansArray.correct_answer
    choices.push(correctAnswer)

    let counter = 1;
    let conter2 = 1;
    // debugger
    return choices.map(ans => {
        return `
            <input type="radio" id="" name="choice" value="${ans}">
            <label for="">${ans}</label><br>
        `
    }).join(" ")
}



///////// ----------- Callbacks --------------- //////////////

function checkedChoices(e) {
    e.preventDefault()
    debugger
}



















// const checked = document.querySelector('input[name="choice"]:checked').value;
// console.log(checked)

