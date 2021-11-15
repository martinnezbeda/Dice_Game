let totalScore, roundScore, activePlayer, dice, playGame;

newStart();

function newStart(){

    totalScore = [0,0];
    roundScore = 0;
    activePlayer = 0;
    playGame = true;

    // score = 0 and displaying nothing
    document.getElementById("totalScorePlayer-0").textContent = 0;
    document.getElementById("totalScorePlayer-1").textContent = 0;
    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;

    // hides the dice
    document.querySelector(".diceImage").style.display = "none";

    // sets text back
    document.querySelector("#name-0").textContent = "Score Player 1 ";
    document.querySelector("#name-1").textContent = "Score Player 2";

    // sets back class active to the first player
    document.querySelector(".totalScore0").classList.add("active");
    document.querySelector(".totalScore1").classList.remove("active");
}

// rolling the dice
document.querySelector(".rollDice").addEventListener("click",function(){

    if(playGame) {
        // 1. get random number between 1 and 6
    let dice = Math.ceil(Math.random()*6);

    // 2. display right picture of a dice num
    let diceElement = document.querySelector(".diceImage");
    diceElement.style.display = "block";
    diceElement.src = "img/"+ dice +".jpg";

    // 3. count numbers from rolling the dice if not 1
    if (dice !== 1){
        roundScore = roundScore + dice;
        document.getElementById("currentScore-" + activePlayer).textContent = roundScore;
    }  // else dice=1 then:
    else { 
        nextPlayer();
        }
    }
});

function nextPlayer(){
    // switches players
    if (activePlayer === 0){
        activePlayer = 1;
    } else {activePlayer = 0;}

    // sets roundscore to zero and hides the dice
    roundScore = 0;

    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;

    document.querySelector(".diceImage").style.display = "none";
    
    document.querySelector(".totalScore0").classList.toggle("active");
    document.querySelector(".totalScore1").classList.toggle("active");

};

document.querySelector(".holdScore").addEventListener("click", function(){

    if(playGame){
         // active player saves their current score into their total + check wheter he s not winner
    totalScore[activePlayer] = totalScore[activePlayer] + roundScore;
    document.querySelector("#totalScorePlayer-"+ activePlayer).textContent = totalScore[activePlayer];

    if (totalScore[activePlayer] >= 100) {
        document.querySelector("#name-" + activePlayer).textContent = "Winner!";
        document.querySelector(".diceImage").style.display = "none";
        playGame = false;
    } else {
        nextPlayer();
        }
    }
   
});

document.querySelector(".newGame").addEventListener("click", newStart);