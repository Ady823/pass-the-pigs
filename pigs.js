let currentPlayer = 0;
let winningScore = 100;
let handScore0 = 0;
let handScore1 = 0;
let handScore2 = 0;
let handScore3 = 0;
let score0 = 0;
let score1 = 0;
let score2 = 0;
let score3 = 0;
let game = true;

//function playerScoring() {
    while(game) {
        if(score1 + handScore1 >= winningScore) {
           console.log("Player 0 wins");
           game = false;
      }
        if(score1 + handScore1 >= winningScore) {
            console.log("Player 1 wins");
            game = false;
      }
      if(score2 + handScore2 >= winningScore) {
            console.log("Player 2 wins");
            game = false;
      }
      if(score3 + handScore3 >= winningScore) {
         console.log("Player 3 wins");
            game = false;
      }
    }
//}

function handleClick(id) {
    console.log(id);
    if(id.includes("Pass")){
        passClick(id)
    }
    if(id.includes("Roll")) {
        rollClick(id)
    }
   // playerScoring();
}

function passClick(id) {
    if(id == "player0PassButton") {
        score0 += handScore0;
       // player0HandScore.innerHTML = "Score: " + handScore2;
       //TODO: do the total score function for all four players
        currentPlayer = 1;
    } else if(id == "player1PassButton") {
        score1 += handScore1;
        currentPlayer = 2;
    } else if(id == "player2PassButton") {
        score2 += handScore2;
        currentPlayer = 3;
    } else if(id == "player3PassButton") {
        score3 += handScore3;
        currentPlayer = 0;
    }
}

function rollClick(id) {
    //TODO: check if player turn 
    if(id == "player0RollButton") {
        currentPlayer = 0;
    } else if(id == "player1RollButton") {
        currentPlayer = 1;
    } else if(id == "player2RollButton") {
        currentPlayer = 2;
    } else if(id == "player3RollButton") {
        currentPlayer = 3;
    }
    console.log(currentPlayer)
    playerRoll(currentPlayer)
}

function playerRoll(player) {
    let pig1 = "";
    let pig2 = "";
    let chance1 = Math.random() * 100 + Math.random();
    let chance2 = Math.random() * 100 + Math.random();

    if (chance1 <= 34.9) {
        pig1 = "dot";
    } else if (chance1 <= 65.1) {
        pig1 = "no dot";
    } else if (chance1 <= 87.5) {
        pig1 = "razorback";
    } else if (chance1 <= 96.3) {
        pig1 = "trotter";
    } else if (chance1 <= 99.3) {
        pig1 = "snouter";
    } else {
        pig1 = "leaning jowler";
    }

   if (chance2 <= 34.9) {
        pig2 = "dot";
    } else if (chance2 <= 65.1) {
        pig2 = "no dot";
    } else if (chance2 <= 87.5) {
        pig2 = "razorback";
    } else if (chance2 <= 96.3) {
        pig2 = "trotter";
    } else if (chance2 <= 99.3) {
        pig2 = "snouter";
    } else {
        pig2 = "leaning jowler";
    } 

    console.log(pig1)
    console.log(pig2)
    pigOut(pig1, pig2);
    setRoll(player, pig1, pig2);

    if(player == 0) {
        handScore0 = handScore(handScore, pig1, pig2)
        player0HandScore.innerHTML = "Score: " + handScore0;
    } else if (player == 1) {
        handScore1 = handScore(handScore, pig1, pig2)
        player1HandScore.innerHTML = "Score: " + handScore1;
    } else if (player == 2) {
        handScore2 = handScore(handScore, pig1, pig2)
        player2HandScore.innerHTML = "Score: " + handScore2;
    } else {
        handScore3 = handScore(handScore, pig1, pig2)
        player3HandScore.innerHTML = "Score: " + handScore3;
    }

}

function slash() {
    player0Pig1.innerHTML = "/"
    player0Pig2.innerHTML = "/" 
    player1Pig1.innerHTML = "/"
    player1Pig2.innerHTML = "/"
    player2Pig1.innerHTML = "/"
    player2Pig2.innerHTML = "/"
    player3Pig1.innerHTML = "/"
    player3Pig2.innerHTML = "/" 
}

function setRoll(player, pig1, pig2) {
    if(player == 0) {
        slash()
        player0Pig1.innerHTML = pig1 
        player0Pig2.innerHTML = pig2 

    } else if (player == 1) {
        slash()
        player1Pig1.innerHTML = pig1 
        player1Pig2.innerHTML = pig2 

    } else if (player == 2) {
        slash()
        player2Pig1.innerHTML = pig1 
        player2Pig2.innerHTML = pig2 
    } else if (player == 3) {
        slash()
        player3Pig1.innerHTML = pig1 
        player3Pig2.innerHTML = pig2 
    } 
}

function pigOut(pig1, pig2) {
    if((pig1 == "no dot" && pig2 == "dot") || (pig2 == "no dot" && pig1 == "dot")) {
        console.log("Pig out!")
    }
    if (currentPlayer < 3) {
        currentPlayer++
    } else {
        currentPlayer = 0;
    }
}

function handScore(handScore, pig1, pig2) {
    let points = 0;
    if (pig1.equals("dot") && pig2.equals("no dot") || pig1.equals("no dot") && pig2.equals("dot")){
        handScore = 0;
        return handScore;
    }
    if (pig1.equals("dot") && pig2.equals("dot") ) {
        points = 0.5; // will be multiplied by two later on
    } else if(pig1.equals("no dot") && pig2.equals("no dot")) {
        points = 0.5; 
    } else {
        if (pig1.equals("razorback")) {
            points += 5;
        } else if (pig1.equals("trotter")) {
            points += 5;
        } else if (pig1.equals("snouter")) {
            points += 10;
        } else if (pig1.equals("leaning jowler")) {
            points += 15;
        }
        if (pig2.equals("razorback")) {
            points += 5;
        } else if (pig2.equals("trotter")) {
            points += 5;
        } else if (pig2.equals("snouter")) {
            points += 10;
        } else if (pig2.equals("leaning jowler")) {
            points += 15;
        }
        
        if (pig1.equals(pig2)){
            points = points * 2;
        }
    }
    return points + handScore;
}

 

