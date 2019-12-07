var startbutton = document.querySelector("#start");
var welcomebox = document.querySelector(".main");
var currentquestion = 0

var questiondisplay =document.getElementById("allthequestions")

startbutton.addEventListener("click",function(){
    welcomebox.remove ()  
    displayQuestion()  
})

//the function above works!!! We wanted to add an event listener for "click" such that 
//the welcome message disappears once the user clicks the start button, and it works.

//now, we need for the first set of questions+answers from our array to be displayed.
//there are 5 indeces in our array: 0, 1, 2, 3 and 4.

var questions = [
    { q: "Which of the following is not one of the three main programming languages of the web?", ans:["HTML", "CSS", "Javascript", "Python"], a: "Python" },
    { q: "Which of the following better describes Javascript?", ans:["Dynaimc", "Static"], a: "Dynamic" },
    { q: "Which of the following better describes HTML?", ans:["Dynaimc", "Static"], a: "Static" },
    { q: "Which of the following is a Javascript Library?", ans:["Ren'Py", "C++", "JQuery", "Bootstrap"], a: "JQuery" },
    { q: "Which of the following is a CSS Library?", ans:["JQuery", "Bootstrap", "DonaCode", "Git"], a: "Bootstrap" }
];

/*
<div class="question">
    <p>Which of the following is not one of the three main programming languages of the web?</p>
    <button class="answer">HTML</button>
    <button class="answer">CSS</button>
    <button class="answer">Javascript</button>
    <button class="answer">Python</button>
</div>
*/


function displayQuestion() {
    var questioncontainer = document.createElement("div");
questioncontainer.setAttribute("class", "question");

var questionsentence = document.createElement("p");
questionsentence.textContent = questions[currentquestion].q


//create a for-loop to go over each index of "ans" array
//within for-loop, create a button which displays the text of the index
//append button to question container.
//

questioncontainer.appendChild(questionsentence);
questiondisplay.appendChild(questioncontainer);
}