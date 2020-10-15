import React, { useEffect } from "react"

function Question(props) {

  useEffect(() =>{
    words=defaultWords;
    synonyms=defaultSynonyms;
    wordsValues();
    console.log(words)
    console.log(synonyms)
    console.log(buttonOne)
  } )

let buttonOne = document.getElementById('btnone');
let buttonTwo = document.getElementById('btntwo');
let buttonThree = document.getElementById('btnthree');
let buttonFour = document.getElementById('btnfour');
const btns = document.querySelectorAll('button[id^=btn]')

let gameSynonym = document.getElementById("synonym");
let playerOneScore = 0; 
let displayPlayerOneScore = document.getElementById("playerOneScore");
let winningValue;
let startButton = document.getElementById("start");
let startDiv = document.getElementById("opening");
let gameWords = [];
  let words;
  let synonyms;
  let defaultWords =[
    "earth",
    "sun",
    "mars",
    "pluto",
    "venus",
    "uranus",
    "moon",
    "saturn",
    "mercury"
  ]
  let defaultSynonyms=[
    "earth",
    "sun",
    "mars",
    "pluto",
    "venus",
    "uranus",
    "moon",
    "saturn",
    "mercury"
  ]

  
  //is being called in button function
  function gamePlay(target){  //if button choice is the right value, increase score, always change user, always change words and relog scores, and prompt next user.
      if (target.textContent===winningValue[0]){
          playerOneScore ++;
          checkIfEndGame();   //for correct choices check if the scores prompt a win.
      } else if(target.textContent!==winningValue[0]){
          checkIfEndGame();
      }
      wordsValues();
      displayPlayerOneScore = ("Player One: " + playerOneScore)
  }

  //add a function on click
  const answerClick = (event) => {
    console.log('clicked')
    console.log(event.target)
    gamePlay(event.target)
  };
  
  //
  function checkIfEndGame (){ //if the score of a player is 10, reset score values for next play. for each, close gameplay and open the winner div.
      if (playerOneScore >= 5){
          playerOneScore = 0;
          //document.getElementById("mainboard").style.display="none";
          //document.getElementById("winner").style.display="block";
          //document.getElementById("winnerTitle").textContent=("Player One Wins!")
      }
  }
 
  function wordsValues(){ //creates array with words, for each round logs 4 random words into the array, using the index value of the word, matches the synonym, returns word, value and synonym into game words.
      gameWords = [];     //also finds a random synonym to create the synonym clue. logs values into buttons.
      for (let i = 0; i < 4; i ++){
      let word = words[Math.floor(Math.random()*words.length)];
      let index = words.indexOf(word);
      let synonym = synonyms[index];
      gameWords[i]=[word , index , synonym];
      };
      winningValue = gameWords[Math.floor(Math.random()*gameWords.length)]
      //synonym.textContent = (winningValue[2])
      
  //buttons
      buttonOne = (gameWords[0][0]);
      buttonTwo = (gameWords[1][0]);
      buttonThree = (gameWords[2][0]);
      buttonFour = (gameWords[3][0]);
  };
   //do on component mount

  return (
    <div>
      <p>question: what is our planet?</p>
      <div className='answer-one' onClick={answerClick}><p>
        {buttonOne}
      </p></div>
      <div className='answer-two' onClick={answerClick}><p>
        {buttonTwo}
      </p></div>
      <div className='answer-three' onClick={answerClick}><p>
        {buttonThree}
      </p></div>
      <div className='answer-four' onClick={answerClick}><p>
        {buttonFour}
      </p></div>
    </div>
  )
}

export default Question