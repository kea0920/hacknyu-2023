
/* SCORING SYSTEM */
var gScore = 0
var bScore = 0

var qCount = 0

/* QUESTION SCHEMATICS */
var buttonIDs = ["0"]
var buttonElementByID = ["0"]
var buttonEventListener = ["0"]

buttonIDs = generateButtonIDs()
buttonElementByID = getButtonElementByID()
buttonEventListener = addButtonEventListeners()

var buttonNum = buttonIDs.length();

const hiddenElements =  document.querySelectorAll('.hidden');

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
// q5-q6 = agriculture
// q7-q8 = transportation

var posFacts = [
  "0", // placeholder (not used); easier to assign quotes to questions
  "Good job! An average shower uses about 2.5 gallons of water per minute. Water scarcity is a huge environmental issue today where 1.1 billion people lack access to water and 2.7 billion experience water scarcity at least one month a year. By 2025, two-thirds of the world’s population may be facing water shortages. (source: worldwildlife.org)",
  "It’s good to use less oil because oil can lead to spills which have very terrible effects on the organisms living there and seabirds in that area. In addition, it will have a harmful effect on the fishing economy because many of the fish there will have died.",
  "Good! Try to unplug appliances when not using them. This is because of the phantom effect, which is where appliances that are plugged in but not being used still generate a very small amount of energy. However, this small amount of energy is being generated at all times and it builds up ",
  "Electric stoves use more energy than gas stoves do, however they do not produce many of the carcinogenic and toxic chemicals that gas stoves might produce",
  "It is good to support local farmers because supporting local farms would help reduce the carbon footprint because less fuel is needed to transport produce from the farms to your house.",
  "Wow, nice! Because of all the energy lost through trophic levels, you consume less for the amount of calories you get compared to meat eaters",
  "Cars release a lot of CO2 which will stay in our atmosphere and continue to make..so keep using public transportation and walking and biking. Also it’s good for your health to exercise through biking and walking!",
  "This is good, and try to fly as little as possible. Planes emit a lot of CO2 which is bad for the environment because it leads to more climate change"
]

var negFacts = [
  "0", // placeholder (not used); easier to assign quotes to questions
  "The average shower uses 2.5 gallons of water per minute. That means you are using at least 25 gallons of water for your shower. Do better.",
  "Usage of oil as energy can have many environmental problems, with one being the risk of oil spills. These oil spills are very hard to clean up and pollute the oceans. This leads to the death of many sea animals, plants and birds.",
  "Even when you are not using appliances, you are still using a very small amount of energy by having them plugged in. While the amount of energy this uses is incredibly small compared to the amount of energy they use when they are actually being used, this builds up considering all of the appliances people have plugged in all around the world. This is called the phantom effect. You can therefore reduce your energy consumption by unplugging appliances when you aren't using them.",
  "Gas stoves can pollute the air by releasing toxic chemicals such as carbon monoxide and benzene which can be carcinogenic. However, they use less energy than electric stoves",
  "Most supermarkets get their products from large industrial farms, usually only farming one type of crop which is very harmful to the soil. In addition, large farms might overuse fertilizer in order to make crops grow faster which leads to runoff of fertilizer and eutrophication of lakes",
  "Trophic levels are levels in an ecosystem based on how many other levels of organisms they need to consume. On average, when moving up by one trophic level, it loses 90% of energy (usually lost as heat). Because meat is higher up on the food chain than plants, it would mean that you need to eat more of it to get a sufficient amount of calories than if you based your diet mainly on eating plants.",
  "Cars produce CO2 which leads to more global warming. If you can, try to use transportation or biking or walking when traveling",
  "Planes use a lot of fuel, meaning that there is a lot of CO2 released and therefore it’s very bad for global warming. Overall, try to fly less"
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

// displayed text
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

//results
function waterG1(){
  gScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)

  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function waterG2(){
  gScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)

  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function homeG1(){
  gScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)

  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function homeG2(){
  gScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)

  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function agriG1(){
  gScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)

  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function agrigG2(){
  gScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)

  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function transportationG1(){
  gScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)

  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function transportationG2(){
  gScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)

  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}

function waterB1(){
  bScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)

  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function waterB2(){
  bScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)

  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function homeB1(){
  bScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)

  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function homeB2(){
  bScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)

  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function agriB1(){
  bScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)

  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function agrigB2(){
  bScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)

  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function transportationB1(){
  bScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)

  if (qCount == 8){
    console.log("the quiz is done")
    getResult();
  }
}
function transportationB2(){
  bScore += 1
  qCount += 1
  console.log("gScore = " + gScore + " and qCount =" + qCount)

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
  else{
    result.innerHTML = "You’ve been doing great, keep doing what you’re doing! Check out the rest of our tip on how to conserve more energy!"
    console.log("g")
  }
}