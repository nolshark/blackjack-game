var startButton = document.querySelector(".start-button");
var rulesButton = document.querySelector(".rules-button");
var scoresButton = document.querySelector(".scores-button");
var optsReturn = document.querySelector(".options-return");
var curReturn = document.querySelector(".currency-return");
var quitButton = document.querySelector(".quit-button");
var infoScreens = document.querySelector(".info-screens");
var rules = document.querySelector(".rules");
var highScores = document.querySelector(".high-scores");
var curSel = document.querySelector(".currency-select");
var tranSel = document.querySelector(".translate-select");
var curChoice = document.querySelector(".currency-choice");
var tranChoice = document.querySelector(".translate-choice");
var hitButton = document.querySelector(".hit-button");
var holdButton = document.querySelector(".hold-button");

// Start Game

function startGame () {
    startButton.style.display = "none";

    quitButton.style.display = "grid";
    hitButton.style.display = "grid";
    holdButton.style.display = "grid";
}

startButton.addEventListener("click", startGame);

//Get rules


rulesButton.addEventListener("click", () => {
  rulesButton.style.display = "none";
  scoresButton.style.display = "none";

  optsReturn.style.display = "grid";
  rules.style.display = "grid";
  
});

//Get high scores

scoresButton.addEventListener("click", () => {
  rulesButton.style.display = "none";
  scoresButton.style.display = "none";

  optsReturn.style.display = "grid";
  highScores.style.display = "grid";
});

//Return to options screen

optsReturn.addEventListener("click", () => {
    rulesButton.style.display = "grid";
    scoresButton.style.display = "grid";
  
    optsReturn.style.display = "none";
    rules.style.display = "none";
    highScores.style.display = "none";
    
  });

  //Quit Game

  quitButton.addEventListener("click", () => {
    startButton.style.display = "grid";
  
    quitButton.style.display = "none";
    hitButton.style.display = "none";
    holdButton.style.display = "none";
  });