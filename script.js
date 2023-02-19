
/* SCORING SYSTEM */
var gScore = 0
var bScore = 0

var qCount = 0

/* QUESTION SCHEMATICS */
// var buttonIDs = ["0"]
// var buttonElementByID = ["0"]
// var buttonEventListener = ["0"]

// buttonIDs = generateButtonIDs()
// buttonElementByID = getButtonElementByID()
// buttonEventListener = addButtonEventListener()

// var buttonNum = buttonIDs.length();

// var questions = [
//   "0", // placeholder value
//   "q1",
//   "q2",
//   "q3",
//   "q4",
//   "q5",
//   "q6",
//   "q7",
//   "q8"
// ]

// var questionNum = questions.length();
// var answerNum = 2;

/* FACT SCHEMATICS */
// var factIDs = ["0"]
// factIDs = generateFactIDs();
// var factIDNum = factIDs.length();

/* FACTS */
// q1-q2 = water
// q3-q4 = home
// q5-q6 = agriculture
// q7-q8 = transportation

let posFacts = [
  "Good job! An average shower uses about 2.5 gallons of water per minute. Water scarcity is a huge environmental issue today where 1.1 billion people lack access to water and 2.7 billion experience water scarcity at least one month a year. By 2025, two-thirds of the world’s population may be facing water shortages. (source: worldwildlife.org)",
  "It’s good to use less oil because oil can lead to spills which have very terrible effects on the organisms living there and seabirds in that area. In addition, it will have a harmful effect on the fishing economy because many of the fish there will have died.",
  "Good! Try to unplug appliances when not using them. This is because of the phantom effect, which is where appliances that are plugged in but not being used still generate a very small amount of energy. However, this small amount of energy is being generated at all times and it builds up ",
  "Electric stoves use more energy than gas stoves do, however they do not produce many of the carcinogenic and toxic chemicals that gas stoves might produce",
  "It is good to support local farmers because supporting local farms would help reduce the carbon footprint because less fuel is needed to transport produce from the farms to your house.",
  "Wow, nice! Because of all the energy lost through trophic levels, you consume less for the amount of calories you get compared to meat eaters",
  "Cars release a lot of CO2 which will stay in our atmosphere and continue to make..so keep using public transportation and walking and biking. Also it’s good for your health to exercise through biking and walking!",
  "This is good, and try to fly as little as possible. Planes emit a lot of CO2 which is bad for the environment because it leads to more climate change"
]

let negFacts = [
  "The average shower uses 2.5 gallons of water per minute. That means you are using at least 25 gallons of water for your shower. Do better.",
  "Usage of oil as energy can have many environmental problems, with one being the risk of oil spills. These oil spills are very hard to clean up and pollute the oceans. This leads to the death of many sea animals, plants and birds.",
  "Even when you are not using appliances, you are still using a very small amount of energy by having them plugged in. While the amount of energy this uses is incredibly small compared to the amount of energy they use when they are actually being used, this builds up considering all of the appliances people have plugged in all around the world. This is called the phantom effect. You can therefore reduce your energy consumption by unplugging appliances when you aren't using them.",
  "Gas stoves can pollute the air by releasing toxic chemicals such as carbon monoxide and benzene which can be carcinogenic. However, they use less energy than electric stoves",
  "Most supermarkets get their products from large industrial farms, usually only farming one type of crop which is very harmful to the soil. In addition, large farms might overuse fertilizer in order to make crops grow faster which leads to runoff of fertilizer and eutrophication of lakes",
  "Trophic levels are levels in an ecosystem based on how many other levels of organisms they need to consume. On average, when moving up by one trophic level, it loses 90% of energy (usually lost as heat). Because meat is higher up on the food chain than plants, it would mean that you need to eat more of it to get a sufficient amount of calories than if you based your diet mainly on eating plants.",
  "Cars produce CO2 which leads to more global warming. If you can, try to use transportation or biking or walking when traveling",
  "Planes use a lot of fuel, meaning that there is a lot of CO2 released and therefore it’s very bad for global warming. Overall, try to fly less"
]


// var facts = ["0"]
// facts = displayFacts();

var result = document.getElementById("result")
var button = document.getElementById("restart");


// COMMENT OUT FROM HERE ONCE CONFIRMED WORKING
var q1a1 = document.getElementById("q1a1")
var q1a2 = document.getElementById("q1a2")
var q2a1 = document.getElementById("q2a1")
var q2a2 = document.getElementById("q2a2")

var q3a1 = document.getElementById("q3a1")
var q3a2 = document.getElementById("q3a2")
var q4a1 = document.getElementById("q4a1")
var q4a2 = document.getElementById("q4a2")

var q5a1 = document.getElementById("q5a1")
var q5a2 = document.getElementById("q5a2")
var q6a1 = document.getElementById("q6a1")
var q6a2 = document.getElementById("q6a2")

var q7a1 = document.getElementById("q7a1")
var q7a2 = document.getElementById("q7a2")
var q8a1 = document.getElementById("q8a1")
var q8a2 = document.getElementById("q8a2")

var water1 = document.getElementById("water1")
var water2 = document.getElementById("water2")

var home1 = document.getElementById("home1")
var home2 = document.getElementById("home2")

var agri1 = document.getElementById("agri1")
var agri2 = document.getElementById("agri2")

var transportation1 = document.getElementById("transportation1")
var transportation2 = document.getElementById("transportation2")

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

button.addEventListener("click", restart);
// COMMENT OUT END HERE

/* GENERATE QUESTIONS */
// creates a new question div class
// function generateQuestion(questionNum, answer1, answer2){
//   var question = generateQuestionStarter(questionNum) + generateAnswers(answer1, answer2) + generateQuestionFinisher
//   return question
// }

// // create question starter
// function generateQuestionStarter(questionNum){
//   return(
//     '<div class="question">' +
//     '<h3>' + questions[questionNum] + '</h3>'
//   )
// }

// // create question finisher
// function generateQuestionFinisher(){
//   return(
//     '</div>'
//   )
// }

// // creates a new answer div class
// function generateAnswers(answer1, answer2){
//   return(
//     '<div class="answer-choice">' +
//       '<br>' +
//       '<button id="' + buttonIDs[answer1] + '">'+ buttonNames[answer1] + '</button>' +
//     '</div>' +
//     '<div class="answer-choice">' +
//       '<br>' +
//       '<button id="' + buttonIDs[answer2] + '">'+ buttonNames[answer2] + '</button>' +
//     '</div>'
//   )
// }

// /* BUTTONS */
// // create button ids
// function generateButtonIDs(answerNum){
//   var buttonName = "";
//   // test out this logic!
//   for (let i = 1; i < questionNum; i++){
//     for (let j = 1; j < answerNum + 1; j++){
//       buttonName = "q" + i + "a" + j;
//       buttonIDs.append(buttonName);
//     }
//   }
// }

// // get button element by id
// function getButtonElementByID(){
//   var elementID = "";
//   for (i = 1; i < buttonNum; i++){
//     elementID = document.getElementById(buttonIDs[i]);
//     buttonElementByID.append(elementID);
//   }
// }

// // add button event listeners for button *elements*
// function addButtonEventListeners(){
//   for (i = 1; i < buttonNum; i++){
//     buttonElementByID[i].addEventListener("click", facts[i]);
//   }
// }

// // creates a fact id in the form: q#f#
// function generateFactIDs(){
//   var factID = "";
//   for (i = 1; i < questionNum; i++){
//     for (j = 1; j < answerNum + 1; j++){
//       factID = "q" + i + "f" + j;
//       factIDs.append(factID);
//     }
//   }
// }

// /* GENERATE FACTS */
// function displayFacts(){
//   var currentNegFact = 1
//   var currentPosFact= 1

//   for (j = 1; j < factIDNum; j++){
//     if (j % 2 == 0){ // second fact; display neg fact
//       var negFact = factIDs[j].innerHTML = displayNegFacts(currentNegFact);
//       facts.append(negFact);
//       currentNegFact++
//     }
//     else { // returns 1; first fact; display pos fact
//       var posFact = factIDs[j].innerHTML = displayPosFacts(currentPosFact);
//       facts.append(posFact)
//       currentPosFact++
//     }
//   }
// }

// function displayPosFacts(currentQuestion){
//   return posFacts[currentQuestion];
// }

// function displayNegFacts(currentQuestion){
//   return negFacts[currentQuestion];
// }

// COMMENT OUT ONCE CONFIRMED WORKING
function cWaterG1(){
  water1.innerHTML = posFacts[0];
}
function cWaterB1(){
  water1.innerHTML = negFacts[0];
}
function cWaterG2(){
  water2.innerHTML = posFacts[1];
}
function cWaterB2(){
  water2.innerHTML = negFacts[1];
}

function cHomeG1(){
  home1.innerHTML = posFacts[2];
}
function cHomeB1(){
  home1.innerHTML = negFacts[2];
}
function cHomeG2(){
  home2.innerHTML = posFacts[3];
}
function cHomeB2(){
  home2.innerHTML = negFacts[3];
}

function cAgriG1(){
  agri1.innerHTML = posFacts[4];
}

function cAgriB1(){
  agri1.innerHTML = negFacts[4];
}

function cAgriG2(){
  agri2.innerHTML = posFacts[5];
}

function cAgriB2(){
  agri2.innerHTML = negFacts[5];
}

function cTransportationG1(){
  transportation1.innerHTML = posFacts[6];
}

function cTransportationB1(){
  transportation1.innerHTML = negFacts[6];
}

function cTransportationG2(){
  transportation2.innerHTML = posFacts[7];
}

function cTransportationB2(){
  transportation2.innerHTML = negFacts[7];
}

//results
function waterG1(){
  gScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)

  cWaterG1()
  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}

function waterG2(){
  gScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)

  cWaterG2()
  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function homeG1(){
  gScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)
  cHomeG1()
  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}

function homeG2(){
  gScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)
  cHomeG2()
  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}

function agriG1(){
  gScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)
  cAgriG1()
  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}

function agriG2(){
  gScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)
  cAgriG2()
  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function transportationG1(){
  gScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)
  cTransportationG1()
  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function transportationG2(){
  gScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)
  cTransportationG2()
  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}

function waterB1(){
  bScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)
  cWaterB1()
  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function waterB2(){
  bScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)
  cWaterB2()
  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function homeB1(){
  bScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)
  cHomeB1()
  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function homeB2(){
  bScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)
  cHomeB2()
  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function agriB1(){
  bScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)
  cAgriB1()
  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function agriB2(){
  bScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)
  cAgriB2()
  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}

function transportationB1(){
  bScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)
  cTransportationB1()
  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}

function transportationB2(){
  bScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)
  cTransportationB2()
  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}

function getResult(){
  if (bScore >= gScore){
    result.innerHTML = "You can do a lot more to help. Check out our tips page for more ways you can help"
    console.log("b")
  }
  else if (bScore < gScore) {
    result.innerHTML = "You’ve been doing great, keep doing what you’re doing! Check out the rest of our tips on how to conserve more energy!"
    console.log("g")
  }
  else {
    result.innerHTML = ""
    console.log("no result")
  }
}

function clearFacts(){
  water1.innerHTML = "";
  water2.innerHTML = "";
  home1.innerHTML = "";
  home2.innerHTML = "";
  agri1.innerHTML = "";
  agri2.innerHTML = "";
  transportation1.innerHTML = "";
  transportation2.innerHTML = "";
}

//restart function
function restart() {
  result.innerHTML = "Your result is... " + getResult();
  qCount = 0;
  gScore = 0;
  bScore = 0;
  console.log("questionCount = " + qCount + " goodScore = " + gScore + " badScore = " + bScore)
  clearFacts()
}