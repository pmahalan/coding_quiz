var startbutton = document.querySelector("#start");
var welcomebox = document.querySelector(".main");

var questiondisplay =document.getElementById("allthequestions")
//the variable above, "questiondisplay", is the div in which each question is going to render.

var questions = [
    { q: "Which of the following is not one of the three main programming languages of the web?", ans:["HTML", "CSS", "Javascript", "Python"], a: "Python" },
    { q: "Which of the following better describes Javascript?", ans:["Dynaimc", "Static"], a: "Dynamic" },
    { q: "Which of the following better describes HTML?", ans:["Dynaimc", "Static"], a: "Static" },
    { q: "Which of the following is a Javascript Library?", ans:["Ren'Py", "C++", "JQuery", "Bootstrap"], a: "JQuery" },
    { q: "Which of the following is a CSS Library?", ans:["JQuery", "Bootstrap", "DonaCode", "Git"], a: "Bootstrap" }
];

var currentquestion = 0

/*
<div class="question">
    <p>Which of the following is not one of the three main programming languages of the web?</p>
    <button class="answer">HTML</button>
    <button class="answer">CSS</button>
    <button class="answer">Javascript</button>
    <button class="answer">Python</button>
</div>
*/

startbutton.addEventListener("click",function(){
    welcomebox.remove ()  
    displayQuestion()  
})
//when the "start" button is clicked (beneath the intro message), the welcome message is removed. 
//Then, the function "displayQuestion" is called.

function displayQuestion() {
    var questioncontainer = document.createElement("div");
    questioncontainer.setAttribute("class", "question");
    //the function above allows a space to be created (a div) where we're going to display "questions".

    for(var i=0; i<questions[currentquestion].ans.length; i++) {
    var choice = document.createElement("button");
    choice.textContent = questions[currentquestion].ans[i];
    choice.setAttribute("onclick", "checkanswer('"+questions[currentquestion].ans[i]+"')")
    questioncontainer.appendChild(choice);
    }
    //Above is a for-loop which goes over each index of "ans" array and makes button for each of the possible answers.

    var questionsentence = document.createElement("p");
    questionsentence.textContent = questions[currentquestion].q
    //the 2 lines of code above are supposed to create some space (a paragraph line) for EACH question to be displayed, not just the first one in the array.
    //since we assign the text content of the variable "questionsentence" equal to "q" from the array (see array), 
    //we need the variable "currentquestion" to be equal to 1, 2, 3 and 4 (in turns) rather than just zero!!! (see line 15)

    questioncontainer.appendChild(questionsentence);
    //the line above appends the sentence with the question to its div container.
    questiondisplay.appendChild(questioncontainer);
    //and this one enables the questions to be displayed where they're supposed to.
}

//line 46:
//next steps
// for each "q", we need a for-loop to go through each iteration.
// better yet, the for-loop should iterate through each index of the "questions" array, not just "q".
// the change/iteration should occur with an event (add event listener) of the clicking of an answer.
// the code below is my first stab at it... let's see if it works!

// choice.addEventListener("click", function() {
//     nextQuestion()  
//     })

function nextQuestion() {
    for(var z=0; z<questions[currentquestion].length; z++) {
        questioncontainer.appendChild(currentquestion);
        }
    }

    function checkanswer(answer) {
        
        if (answer === questions[currentquestion].a) {
            alert("correct!")
            // you can make code here to go to the next question (regardless of correct or incorrect)
        } else {
        alert("incorrect")
        //same here
        }
    }

    //create an on-click event within each button.
    // first create a function to display correct or incorrect depending on what they select, and subtracting time
