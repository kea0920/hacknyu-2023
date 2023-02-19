
/* SCORING SYSTEM */
var mScore = 0
var nScore = 0

var qCount = 0

/* QUESTION SCHEMATICS */
var buttonIDs = ["0"]
var buttonElementByID = ["0"]
var buttonEventListener = ["0"]

buttonIDs = generateButtonIDs()
buttonElementByID = getButtonElementByID()
buttonEventListener = addButtonEventListener()

var buttonNum = buttonIDs.length();

var questions = [
  "0", // placeholder value
  "q1",
  "q2",
  "q3",
  "q4",
  "q5",
  "q6",
  "q7",
  "q8"
]

var questionNum = questions.length();
var answerNum = 2;

/* FACT SCHEMATICS */
var factIDs = ["0"]
factIDs = generateFactIDs();
var factIDNum = factIDs.length();

/* FACTS */
// q1-q2 = water
// q3-q4 = home
// q5-q6 = agri
// q7-q8 = transportation

var posFacts = [
  "0", // placeholder; easier to assign quotes to questions
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8"
]

var negFacts = [
  "0", // placeholder; easier to assign quotes to questions
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8"
]

var facts = ["0"]
facts = displayFacts();

var result = document.getElementById("result")
addButtonEventListeners();

// COMMENT OUT FROM HERE ONCE CONFIRMED WORKING
var q1a1 = document.getElementById("q1a1")
var q1a2 = document.getElementById("q1a2")
var q2a1 = document.getElementById("q2a1")
var q2a2 = document.getElementById("q2a2")
var q3a1 = document.getElementById("q3a1")
var q3a2 = document.getElementById("q3a2")

q1a1.addEventListener("click", waterG1);
q1a2.addEventListener("click", waterB1);
q2a1.addEventListener("click", waterG2);
q2a2.addEventListener("click", waterB2);

q3a1.addEventListener("click", homeG1);
q3a2.addEventListener("click", homeB1);
q4a1.addEventListener("click", homeG2);
q4a2.addEventListener("click", homeB2);

q5a1.addEventListener("click", agriG1);
q5a2.addEventListener("click", agriB1);
q6a1.addEventListener("click", agriG2);
q6a2.addEventListener("click", agriB2);

q7a1.addEventListener("click", transportationG1);
q7a2.addEventListener("click", transportationB1);
q8a1.addEventListener("click", transportationG2);
q8a2.addEventListener("click", transportationB2);
// COMMENT OUT END HERE

/* GENERATE QUESTIONS */
// creates a new question div class
function generateQuestion(questions, answerID, fact, index){

}

/* BUTTONS */
// create button ids
function generateButtonIDs(answerNum){
  var buttonName = "";
  // test out this logic!
  for (let i = 1; i < questionNum; i++){
    for (let j = 1; j < answerNum + 1; j++){
      buttonName = "q" + i + "a" + j;
      buttonIDs.append(buttonName);
    }
  }
}

// get button element by id
function getButtonElementByID(){
  var elementID = "";
  for (i = 1; i < buttonNum; i++){
    elementID = document.getElementById(buttonIDs[i]);
    buttonElementByID.append(elementID);
  }
}

// add button event listeners for button *elements*
function addButtonEventListeners(){
  for (i = 1; i < buttonNum; i++){
    buttonElementByID[i].addEventListener("click", facts[i]);
  }
}

// creates a fact id in the form: q#f#
function generateFactIDs(){
  var factID = "";
  for (i = 1; i < questionNum; i++){
    for (j = 1; j < answerNum + 1; j++){
      factID = "q" + i + "f" + j;
      factIDs.append(factID);
    }
  }
}

/* GENERATE FACTS */
function displayFacts(){
  var currentNegFact = 1
  var currentPosFact= 1

  for (j = 1; j < factIDNum; j++){
    if (j % 2 == 0){ // second fact; display neg fact
      var negFact = factIDs[j].innerHTML = displayNegFacts(currentNegFact);
      facts.append(negFact);
      currentNegFact++
    }
    else { // returns 1; first fact; display pos fact
      var posFact = factIDs[j].innerHTML = displayPosFacts(currentPosFact);
      facts.append(posFact)
      currentPosFact++
    }
  }
}

function displayPosFacts(currentQuestion){
  return posFacts[currentQuestion];
}

function displayNegFacts(currentQuestion){
  return negFacts[currentQuestion];
}

// COMMENT OUT ONCE CONFIRMED WORKING
function waterG1(){
  water1.innerHTML = factsG[0];
}
function waterB1(){
  water1.innerHTML = factsB[0];
}
function waterG2(){
  water2.innerHTML = factsG[1];
}
function waterB2(){
  water2.innerHTML = factsB[1];
}

function homeG1(){
  home1.innerHTML = factsG[2];
}
function homeB1(){
  home1.innerHTML = factsB[2];
}
function homeG2(){
  home2.innerHTML = factsG[3];
}
function homeB2(){
  home2.innerHTML = factsB[3];
}

function agriG1(){
  agri1.innerHTML = factsG[4];
}

function agriB1(){
  agri1.innerHTML = factsB[4];
}

function agriG2(){
  agri2.innerHTML = factsG[5];
}

function agriB2(){
  agri2.innerHTML = factsB[5];
}

function transportationG1(){
  agri1.innerHTML = factsG[6];
}

function transportationB1(){
  agri1.innerHTML = factsB[6];
}

function transportationG2(){
  agri2.innerHTML = factsG[7];
}

function transportationB2(){
  agri2.innerHTML = factsB[7];
}