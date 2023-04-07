const { get } = require("https");

const Hand = ["rock", "paper", "scissors"];

const PlayerOne = { Name: "Joe", getHandmethod: getHand };
const PlayerTwo = { Name: "Nancy", getHandmethod: getHand };
const PlayerThree = { Name: "Yuno", getHandmethod: getHand };
const PlayerFour = { Name: "Buddy", getHandmethod: getHand };
console.log(PlayerOne);

function getHand() {
  return Hand[parseInt(Math.random() * 10) % 3];
}
console.log(getHand);

function playRound(PlayerOne, PlayerTwo) {
  let player1 = PlayerOne.getHandmethod();
  let player2 = PlayerTwo.getHandmethod();

  console.log(PlayerOne.Name, player1);
  console.log(PlayerTwo.Name, player2);

  if (player1 === player2) {
    console.log("it's a tie");
    return null;
  } else if (player1 === "rock" && player2 === "scissors") {
    console.log("Rock wins!");
    return PlayerOne;
  } else if (player1 === "scissors" && player2 === "paper") {
    console.log("Scissor wins!");
    return PlayerOne;
  } else if (player1 === "paper" && player2 === "rock") {
    console.log("Paper wins!");
    return PlayerOne;
  } else if (player1 === "scissors" && player2 === "rock") {
    console.log("Rock wins!");
    return PlayerTwo;
  } else if (player1 === "paper" && player2 === "scissors") {
    console.log("Scissors wins");
    return PlayerTwo;
  } else if (player1 === "rock" && player2 === "paper") {
    console.log("Rock wins!");
    return PlayerOne;
  }
}

const playUntill = 1;
let player1Wins = 0;
let player2Wins = 0;

function playGame(PlayerOne, PlayerTwo, playUntill = 1) {
  let game = playRound(PlayerOne, PlayerTwo);
  if (game === PlayerOne) {
    player1Wins += 1;
    console.log("Joe:" + player1Wins);
    console.log("Nancy:" + player2Wins);
  } else if (game == PlayerTwo) {
    player2Wins += 1;
    console.log("Joe:" + player1Wins);
    console.log("Nancy:" + player2Wins);
  }
  if (player1Wins == playUntill || player2Wins == playUntill) {
    return [game];
  }
  return playGame(PlayerOne, PlayerTwo);
}

let firstWinner = playGame(PlayerOne, PlayerTwo, playUntill);
console.log(firstWinner);

//second game
function playRound2(PlayerThree, PlayerFour) {
  let player3 = PlayerThree.getHandmethod();
  let player4 = PlayerFour.getHandmethod();

  console.log(PlayerThree.Name, player3);
  console.log(PlayerFour.Name, player4);

  if (player3 === player4) {
    console.log("it's a tie");
    return null;
  } else if (player3 === "rock" && player4 === "scissors") {
    console.log("Rock wins!");
    return PlayerThree;
  } else if (player3 === "scissors" && player4 === "paper") {
    console.log("Scissor wins!");
    return PlayerThree;
  } else if (player3 === "paper" && player4 === "rock") {
    console.log("Paper wins!");
    return PlayerThree;
  } else if (player3 === "scissors" && player4 === "rock") {
    console.log("Rock wins!");
    return PlayerFour;
  } else if (player3 === "paper" && player4 === "scissors") {
    console.log("Scissors wins");
    return PlayerFour;
  } else if (player3 === "rock" && player4 === "paper") {
    console.log("Rock wins!");
    return PlayerThree;
  }
}

const playUntill2 = 1;
let player3Wins = 0;
let player4Wins = 0;

function playGame2(PlayerThree, PlayerFour, playUntill2 = 1) {
  let game = playRound(PlayerThree, PlayerFour);
  if (game === PlayerThree) {
    player3Wins += 1;
    console.log("Yuno:" + player3Wins);
    console.log("Buddy:" + player4Wins);
  } else if (game == PlayerTwo) {
    player4Wins += 1;
    console.log("Yuno:" + player3Wins);
    console.log("Buddy:" + player4Wins);
  }
  if (player3Wins == playUntill2 || player4Wins == playUntill2) {
    return [game];
  }
  return playGame2(PlayerThree, PlayerFour);
}

let secondWinner = playGame2(PlayerThree, PlayerFour, playUntill2);
console.log(secondWinner);

//Final Game

// function playRoundFinal(firstWinner, secondWinner) {
//   let firstWinnerOne = firstWinner.getHandmethod();
//   let secondWinnerOne = secondWinner.getHandmethod();

//   console.log(finalWinner.Name, firstWinnerOne);
//   console.log(secondWinner.Name, secondWinnerOne);

//   if (firstWinnerOne === secondWinnerOne) {
//     console.log("it's a tie");
//     return null;
//   } else if (firstWinnerOne === "rock" && secondWinnerOne === "scissors") {
//     console.log("Rock wins!");
//     return firstWinnerOne;
//   } else if (firstWinnerOne === "scissors" && secondWinnerOne === "paper") {
//     console.log("Scissor wins!");
//     return PlayerFour;
//   } else if (firstWinnerOne === "paper" && secondWinnerOne === "rock") {
//     console.log("Paper wins!");
//     return firstWinnerOne;
//   } else if (firstWinnerOne === "scissors" && secondWinnerOne === "rock") {
//     console.log("Scissors wins!");
//     return PlayerFour;
//   } else if (firstWinnerOne === "paper" && secondWinnerOne === "scissors") {
//     console.log("Paper wins");
//     return firstWinnerOne;
//   } else if (firstWinnerOne === "rock" && secondWinnerOne === "paper") {
//     console.log("Rock wins!");
//     return secondWinnerOne;
//   }
// }

// const playUntillFinal = 1;
// let firstWinnerWins = 0;
// let secondWinnerWins = 0;

// function playGame3(PlayerThree, PlayerFour, playUntillFinal = 1) {
//   let game = playRound(firstWinner, secondWinner);
//   if (game === firstWinner) {
//     firstWinnerWins += 1;
//     console.log(firstWinner.Name + firstWinnerWins);
//     console.log(secondWinner.Name + secondWinnerWins);
//   } else if (game == secondWinner) {
//     secondWinnerWins += 1;
//     console.log(firstWinner.Name + firstWinnerWins);
//     console.log(secondWinner.Name + secondWinnerWins);
//   }
//   if (
//     firstWinnerWins == playUntillFinal ||
//     secondWinnerWins == playUntillFinal
//   ) {
//     return [game];
//   }
//   return playGame3(PlayerThree, PlayerFour);
// }

// let finalWinner = playGame3(firstWinner, secondWinner, playUntillFinal);
// console.log(secondWinner);

// function playRound() { return null };

module.exports.Hand = Hand;
module.exports.playUntill = playUntill;
module.exports.playRound = playRound;
