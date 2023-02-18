import streamlit as st
from streamlit.components.v1 import html

html("""
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>thisiswhathappens</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
    <nav>
      <ul>
        <li> <a href="index.html"> Home </a></li>
        <li> <a href="quiz.html"> Quiz </a></li>
        <li> <a href="action.html"> How to Help </a></li> 
      </ul>
    </nav>
  <header>
  <h1>
  this is what happens.
  </h1>
  <p>Take this quiz to find out how your actions affect the world and what you can do to help.</p>
    </header>
  <script src="script.js"></script>

  <main>
<center>
<h2> Water Waste </h2>

<!-- template from gwc lol -->
    <div class="question">

			<div class="answer-choice">
				<img src="assets/overflow.jpeg" alt="SHOWER">
        <h3>HOW LONG ARE YOUR SHOWERS</h3>
        <br>
        <button id="q1a1">10 minutes and fewer</button>
      </div>

      <div class="answer-choice">
        <br>
        <button id="q1a2"> Over 10 minutes </button>
      </div>
      <p id="water1"></p>
    </div>
      
  <div class="question">

			<div class="answer-choice">
				<img src="assets/overflow.jpeg" alt="SHOWER">
        <h3>How often do you use oil</h3>
        <br>
        <button id="q2a1">A lot</button>
      </div>

      <div class="answer-choice">
        <br>
        <button id="q2a2"> Over 10 minutes </button>
      </div>

     <p id="water2"></p>
    </div> 

    <h2> Energy Usage in the Home</h2>
          <div class="question">

			<div class="answer-choice">
				<img src="assets/overflow.jpeg" alt="SHOWER">
        <h3>HOW MANY APPLIANCES DO YOU HAVE AT HOME</h3>
        <br>
        <button id="q3a1"> less than 10</button>
      </div>

      <div class="answer-choice">
        <br>
        <button id="q3a2"> Over 10 minutes </button>
      </div>
          <p id="home1"></p>  

    <div class="question">

			<div class="answer-choice">
				<img src="assets/stove.jpeg" alt="SHOWER"
          width = "300"
          height = "200">
        <h3>How often do you use gas stoves?</h3>
        <br>
        <button id="q4a1"> A lot</button>
      </div>

      <div class="answer-choice">
        <br>
        <button id="q4a2"> A little </button>
      </div>
      <p id="home2"></p> 
    </div>
      
    <h2> Agriculture</h2>
 
    <div class="question">

			<div class="answer-choice">
				<img src="assets/market.jpeg" alt="Market"
          width="300" 
          height="200">
        <h3>Do you buy mostly from a supermarket chain or your local farmer?</h3>
        <br>
        <button id="q5a1">Supermarket chain</button>
      </div>

      <div class="answer-choice">
        <br>
        <button id="q5a2">Local farmer</button>
      </div>

      <p id="agri1"></p> 
    </div>


          <div class="question">

			<div class="answer-choice">
				<img src="assets/farm.jpeg" alt="farm" 
          width="300" 
          height="200">
        <h3>How often do you eat animal products</h3>
        <br>
        <button id="q6a1"> 5-7 days of the week</button>
      </div>

      <div class="answer-choice">
        <br>
        <button id="q6a2"> 4-0 days of the week </button>
      </div>

            <p id="agri2"></p> 
          </div>


                <h2> Transportation</h2>
 
    <div class="question">

			<div class="answer-choice">
				<img src="assets/market.jpeg" alt="Market"
          width="300" 
          height="200">
        <h3>How often do you use public transportation, bike, or walk?</h3>
        <br>
        <button id="q7a1">Everyday</button>
      </div>

      <div class="answer-choice">
        <br>
        <button id="q7a2">3 to 0 days of the week</button>
      </div>
      <p id="transportation1"></p> 
    </div>
          <div class="question">

			<div class="answer-choice">
				<img src="assets/farm.jpeg" alt="farm" 
          width="300" 
          height="200">
        <h3>How many miles do you fly on a plane</h3>
        <br>
        <button id="q8a1"> 5-7 days of the week</button>
      </div>

      <div class="answer-choice">
        <br>
        <button id="q8a2"> 4-0 days of the week </button>
      </div>
            <p id="transportation2"></p> 
          </div>
</center>
             </main>
  
  <!--
  This script places a badge on your repl's full-browser view back to your repl's cover
  page. Try various colors for the theme: dark, light, red, orange, yellow, lime, green,
  teal, blue, blurple, magenta, pink!
  -->
  <script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
</body>
""")