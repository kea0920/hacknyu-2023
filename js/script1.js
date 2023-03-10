
/* SCORING SYSTEM */
var mScore = 0
var nScore = 0

var qCount = 0

var section = [
  "0", // placeholder
  "Water Waste",
  "Home Energy Usage",
  "Agriculture",
  "Transportation"
]

var questions = [
  "0", // placeholder value
  "How long are your showers?",
  "How much is your house powered by oil?",
  "How many appliances do you leave plugged in at home?",
  "Do you use electric stoves or gas stoves?",
  "Do you buy mostly from a supermarket chain or your local farmer?",
  "How often do you eat animal products?",
  "How often do you use public transportation, bike, or walk?",
  "How many miles do you fly on a plane?"
]

var buttonNames = [
  "0", // placeholder value
  "10 minutes and fewer",
  "over 10 minutes",
  "a little or none",
  "a lot",
  "less than 10 appliances",
  "over 10 appliances",
  "electric stove",
  "gas stove",
  "local farmer",
  "supermarket chain",
  "0-4 days of the week",
  "5-7 days of the week",
  "everyday",
  "0-3 days of the week",
  "0-50 miles",
  "100+ miles"
]

/* FACTS */
// q1-q2 = water
// q3-q4 = home
// q5-q6 = agri
// q7-q8 = transportation

var posFacts = [
  "0", // placeholder (not used); easier to assign quotes to questions
  "Good job! An average shower uses about 2.5 gallons of water per minute. Water scarcity is a huge environmental issue today where 1.1 billion people lack access to water and 2.7 billion experience water scarcity at least one month a year. By 2025, two-thirds of the world’s population may be facing water shortages. (source: worldwildlife.org)",
  "It's good to use less oil because oil can lead to spills which have very terrible effects on the organisms living there and seabirds in that area. In addition, it will have a harmful effect on the fishing economy because many of the fish there will have died.",
  "Good! Try to unplug appliances when not using them. This is because of the phantom effect, which is where appliances that are plugged in but not being used still generate a very small amount of energy. However, this small amount of energy is being generated at all times and it builds up ",
  "Electric stoves use more energy than gas stoves do, however they do not produce many of the carcinogenic and toxic chemicals that gas stoves might produce",
  "It is good to support local farmers because supporting local farms would help reduce the carbon footprint because less fuel is needed to transport produce from the farms to your house.",
  "Wow, nice! Because of all the energy lost through trophic levels, you consume less for the amount of calories you get compared to meat eaters",
  "Cars release a lot of CO2 which will stay in our atmosphere and continue to make..so keep using public transportation and walking and biking. Also it's good for your health to exercise through biking and walking!",
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
  "Planes use a lot of fuel, meaning that there is a lot of CO2 released and therefore it's very bad for global warming. Overall, try to fly less"
]

/* QUESTION SCHEMATICS */
var questionGen = document.getElementById("allQuestions");
var questionGenButton = document.getElementById("questionGenButton");

questionGenButton.addEventListener("click", returnQuestions);

var questionNum = questions.length();
var answerNum = 2;

var buttonIDs = generateButtonIDs()
var buttonElementByID = getButtonElementByID()
var buttonEventListener = addButtonEventListeners()

var buttonNum = buttonIDs.length();

/* FACT SCHEMATICS */
var factIDs = generateFactIDs();
var factIDNum = factIDs.length();

var facts = displayFacts();

var result = document.getElementById("result")
addButtonEventListeners();

// COMMENT OUT FROM HERE ONCE CONFIRMED WORKING
// var q1a1 = document.getElementById("q1a1")
// var q1a2 = document.getElementById("q1a2")
// var q2a1 = document.getElementById("q2a1")
// var q2a2 = document.getElementById("q2a2")
// var q3a1 = document.getElementById("q3a1")
// var q3a2 = document.getElementById("q3a2")

// q1a1.addEventListener("click", waterG1);
// q1a2.addEventListener("click", waterB1);
// q2a1.addEventListener("click", waterG2);
// q2a2.addEventListener("click", waterB2);

// q3a1.addEventListener("click", homeG1);
// q3a2.addEventListener("click", homeB1);
// q4a1.addEventListener("click", homeG2);
// q4a2.addEventListener("click", homeB2);

// q5a1.addEventListener("click", agriG1);
// q5a2.addEventListener("click", agriB1);
// q6a1.addEventListener("click", agriG2);
// q6a2.addEventListener("click", agriB2);

// q7a1.addEventListener("click", transportationG1);
// q7a2.addEventListener("click", transportationB1);
// q8a1.addEventListener("click", transportationG2);
// q8a2.addEventListener("click", transportationB2);
// COMMENT OUT END HERE

/* GENERATE QUESTION ELEMENT */
// create single question
function generateQuestion(questionNum, answer1, answer2){
  var question = generateQuestionStarter(questionNum) + generateAnswers(answer1, answer2) + generateQuestionFinisher
  return question
}

// create question starter
function generateQuestionStarter(questionNum){
  return(
    '<div class="question">' +
    '<h3>' + questions[questionNum] + '</h3>'
  )
}

// create question finisher
function generateQuestionFinisher(){
  return(
    '</div>'
  )
}

// creates a new answer div class
function generateAnswers(answer1, answer2){
  return(
    '<div class="answer-choice">' +
      '<br>' +
      '<button id="' + buttonIDs[answer1] + '">'+ buttonNames[answer1] + '</button>' +
    '</div>' +
    '<div class="answer-choice">' +
      '<br>' +
      '<button id="' + buttonIDs[answer2] + '">'+ buttonNames[answer2] + '</button>' +
    '</div>'
  )
}

/* BUTTONS */
// create button ids
function generateButtonIDs(answerNum){
  var buttonIDs = ["0"]
  var buttonName = "";

  // test out this logic!
  for (let i = 1; i < questionNum; i++){
    for (let j = 1; j < answerNum + 1; j++){
      buttonName = "q" + i + "a" + j;
      buttonIDs.append(buttonName);
    }
  }
  return buttonIDs
}

// get button element by id
function getButtonElementByID(){
  var buttonElementByID = ["0"]
  var elementID = "";

  for (i = 1; i < buttonNum; i++){
    elementID = document.getElementById(buttonIDs[i]);
    buttonElementByID.append(elementID);
  }
  return buttonElementByID
}

// add button event listeners for button *elements*
function addButtonEventListeners(){
  var buttonEventListener = ["0"]

  for (i = 1; i < buttonNum; i++){
    var eventListener = buttonElementByID[i].addEventListener("click", facts[i]);
    buttonEventListener.append(eventListener)
  }

  return buttonEventListener
}

// creates a fact id in the form: q#f#
function generateFactIDs(){
  var factIDs = ["0"]
  var factID = "";

  for (i = 1; i < questionNum; i++){
    for (j = 1; j < answerNum + 1; j++){
      factID = "q" + i + "f" + j;
      factIDs.append(factID);
    }
  }
  return factIDs
}

/* GENERATE FACTS */
function displayFacts(){
  var facts = ["0"]
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
  return facts
}

function displayPosFacts(currentQuestion){
  return posFacts[currentQuestion];
}

function displayNegFacts(currentQuestion){
  return negFacts[currentQuestion];
}