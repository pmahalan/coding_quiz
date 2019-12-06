var firstset = document.querySelector("#problem1");
var secondset = document.querySelector("#probelm2");
var thirdset = document.querySelector("#problem3");
var fourthset = document.querySelector("#problem4");
var fifthset = document.querySelector("#problem5");

var firstcorrect = document.querySelector("#1d")
var secondcorrect = document.querySelector("#2a")
var thirdcorrect = document.querySelector("#3b")
var fourthcorrect = document.querySelector("#4c")
var fifthcorrect = document.querySelector("#5b")


var questions = [
    { q: "Which of the following is not one of the three main programming languages of the web?", ans:["HTML", "CSS", "Javascript", "Python"], a: "Python" },
    { q: "Which of the following better describes Javascript?", ans:["Dynaimc", "Static"], a: "Dynamic" },
    { q: "Which of the following better describes HTML?", ans:["Dynaimc", "Static"], a: "Static" },
    { q: "Which of the following is a Javascript Library?", ans:["Ren'Py", "C++", "JQuery", "Bootstrap"], a: "JQuery" },
    { q: "Which of the following is a CSS Library?", ans:["JQuery", "Bootstrap", "DonaCode", "Git"], a: "Bootstrap" }
];

//write code that enables the "right" and "wrong" messages to be displayed for each question. 

//For each question, 

//If  the user clicks on the correct option, it'll display a "correct" message. Otherwise it'll display an incorrect message.
firstset.addEventListener("click", function(event) {
    event.preventDefault();

    if(event.target.matches(firstcorrect)) {
        firstset.append("Correct!")
    }
    else {
        firstset.append("Wrong!")
    }
}) 