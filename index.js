fetch('https://opentdb.com/api.php?amount=10&category=23')
.then(res => res.json())
.then(triviaJson)

const triviaUl = document.querySelector('.trivia')
const choicesForm = document.querySelector('.choices')


function triviaJson(trivia) {
    // debugger
    const triviaArr = trivia.results
    for (trivia of triviaArr) {
        triviaUl.innerHTML +=
            `
            <h4>Question</h4>
            <p>${trivia.question}</p>
            <div class="radio-div">${displayOptions(trivia)}</div>

            `
        }

    //     for (trivia of triviaArr) {
    //
    //         choicesForm.innerHTML +=
    //         `
    //             <input type="radio" name="gender" value="male"> ${displayOptions(trivia)}<br>
    //
    //         `
    // }

}

function displayOptions(ansArray){
    const choices = ansArray.incorrect_answers
    const correctAnswer = ansArray.correct_answer
    choices.push(correctAnswer)

    // debugger
    return choices.map(ans => {
        return `
        <form action="">
        <input type="radio" id="" name="${ans}" value="${ans}">
        <label for="">${ans}</label><br>
        </form>
        `
    }).join(" ")
}

// const checked = document.querySelector('input[name="choice"]:checked').value;
// console.log(checked)
