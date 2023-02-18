/*Add your JavaScript here*/
/*facts*/
var waterG = "goodjob"
var waterB = "WE ARE LOSING WATER!! Some cities like Mexico City can't even have running water for more..this can happen if we don't conserve";
var homeG = "gooodjob"
var homeB = "bad";
var agriG = "cool"
var agriB = "talk abt runoff maybe?? and eutrophication";
var transportationG = "nice"
var transportationB = "CO2 bad";

var factsG = [
  "0", // placeholder; easier to assign quotes to questions
  "1" 
]

var factsB = [
  "0", // placeholder; easier to assign quotes to questions
  "1"
]

var mScore = 0
var nScore = 0

var qCount = 0

var result = document.getElementById("result")

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



/*FACT STUFF */

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