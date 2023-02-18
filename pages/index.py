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
""")