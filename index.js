
function fetchQ() {
    return  fetch('https://opentdb.com/api.php?amount=1&category=23')
    .then(res => res.json())
}




//// --------------  decleration --------------------/////
const triviaUl = document.querySelector('.trivia')
const choicesForm = document.querySelector('.choices')
const next = document.querySelector('.next')
const scoreDiv = document.querySelector('.score')
const submitBtn = document.querySelector('#submit-btn')

let score = 0;
///// -------------  Event Litners ----------------- /////
// choicesForm.addEventListener('submit', checkedChoices)

next.addEventListener('click', nextQ)

///// -------------- Logic and Functions --------------- ///////

var i = 0;
// nextQ()
// while (i < 3) {
// //   

  
////// ------------ 
    function nextQ() {
        // debugger
        if (i < 4){
            // scoreDiv.textContent = '' 
            fetchQ().then(triviaJson)
            i++
        } else {
            triviaUl.innerHTML = ''
            scoreDiv.textContent = score
            i = 0
            submitBtn.remove()
            console.log(score)
            console.log('I hit max of 3')
        }
    }



    
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
                    nextQ()
                } else {
                    
                    console.log("incorrect")
                    nextQ() 
                }
                console.log("Score = " + score)
            
        })
    }
   
//     i++;
// }
    











////--------------- flatten Array
function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }


function displayOptions(ansArray){
    
    const correctAndIncorrect = []
    correctAndIncorrect.push(ansArray.incorrect_answers)
    correctAndIncorrect.push(ansArray.correct_answer)
    
    // const choices = ansArray.incorrect_answers
    // const correctAnswer = ansArray.correct_answer
    // choices.push(correctAnswer)
    const merge3 = flatten(correctAndIncorrect);
    // shuffle(merge3)
    // debugger
    
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
