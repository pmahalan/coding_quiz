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
    setTime();
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
    //our last step is going to be setting "currentquestion" equal to 1, 2, 3 and 4 (in turns) rather than just zero!!! (see line 15)

    questioncontainer.appendChild(questionsentence);
    //the line above appends the sentence with the question to its div container.
    questiondisplay.appendChild(questioncontainer);
    //and this one enables the questions to be displayed where they're supposed to.
}

//________________________________________________________________________________________________

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("timedisplay");
//see lines 22-25 of your HTML.

var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    //If functioning correctly, the function above should display the time counting down from 75.

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      //'clearInterval' ensures that the timer doesn't keep counting down to negative numbers after it reaches zero.
      sendMessage();
      //this is calling the function which will display your 'time's up' message!
    }

  }, 1000);
  //'1000' on line 19 ensures that it counts with 1000 milliseconds to each second, so that it doesn't go super slow or fast.
}

function sendMessage() {
  timeEl.textContent = " ";

    var timesup = document.createElement("p");
    //creating a p element to display the mssage.
    timesup.textContent = "Time is up!"
    // giving text content to that message

    var timemessage = document.getElementById(timedisplay)
    //creating a new variable, 'timemessage', targeting the timedisplay area on your HTML page.
    timemessage.append(timesup)
    //appending that variable to the paragraph where the timesup message will be displayed.
}

//________________________________________________________________________________________________

function checkanswer(answer) {
    if (answer === questions[currentquestion].a) {
        alert("correct!")
        currentquestion++
        // you can make code here to go to the next question!! (regardless of correct or incorrect)
        displayQuestion() 
    } else {
        alert("incorrect")
        currentquestion++
        secondsLeft-=15
        // same here!
        displayQuestion() 
    }
}


// upon the timer reaching zero, we need to write code that hides the questions div and displays a new "ending" message telling them time is up.


//________________________________________________________________________________________________
// finally -- see line 51! (write code to progress through the questions.)
