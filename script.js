const quizData= [


{
    Q:" How should you start each HTML5 document?",
A: "<html>",
B:"<head>",
C:"<title>",
D:"<!DOCTYPE html>",
Correct:"D" 
},
{
    Q:" To show an image with caption which HTML5 element do you use?",
A: "<img> and <span>",
B: "<img> and <caption>",
C:"<img> with title attribute",
D:"<figure>",
Correct: "D"
},
{
    Q: "HTML5 originates from?",
A: "HTML 4.01",
B: "XHTML",
C: "SGML",
D: "CSS",
Correct: "A"
},

 {Q:" HTML uses __________ to provide formatting features to content?",
A: "tag",
B: "attributes",
C: "statements",
D:"semantics",
Correct: "A"},

{
    Q: 'Which one enables you to import a CSS file to the current style sheet?',
A: "@include",
B: "@insert",
C: "@import",
D:"@use",
Correct: "C"
},
{
    Q:"Which one the selector of hyperlinks that are direct children of list item?",
A: "li a",
B: "li + a",
C: "li ~ a",
D: "li > a",
Correct: "D"

},
{
    Q: "Consider the statement in JavaScript name =Anwar Hossain’;Which of the following will show message?",

A: "alert(name)",
B: "alert(global.name)",
C: "alert(window[‘name’]",
D: "alert(global.name)",
Correct: "A" 
},

{
    Q: "Who invented JavaScript?",

A: "Ryan Dahl",
B: "Chris Beard",
C: "Brendan Eich",
D: "James Gosling",
Correct: "C" 
},
{
    Q: "When was JavaScript first developed?",

A: "1989",
B: "1995",
C: "1997",
D: "1999",
Correct: "B" 
},
{
    Q: "Which one is not a valid way to create a javascript object?",
A: "var object = {};",
B: " var object = { prop1: 'value1' , prop2 : 'value2'} ",
C: "var object = Object.create({});",
D :"var object = new Object(‘value1’, ‘value2’);",
Correct: "D"
},

]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')

const a_text =document.getElementById('a-text')
const b_text =document.getElementById('b-text')
const c_text =document.getElementById('c-text')
const d_text =document.getElementById('d-text')
const submitBtn =document.getElementById('submit-btn')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    deselectAns()
    const currentQuizData =quizData[currentQuiz]

    questionEl.innerText =currentQuizData.Q
    a_text.innerText= currentQuizData.A
    b_text.innerText= currentQuizData.B
    c_text.innerText= currentQuizData.C
    d_text.innerText= currentQuizData.D

}

function deselectAns(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', ()=>{
    const answer =getSelected()
    if(answer === quizData[currentQuiz].Correct){
        score++
    }

    currentQuiz++

    if(currentQuiz < quizData.length){
        loadQuiz()
    }
    else{
        quiz.innerHTML= `<h2> You answer  at ${score} / ${quizData.length} question correctly <h2>
        
        <button onclick="location.reload()"> Reload </button> 
        
        `
    }
})
