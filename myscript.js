const Hand= ['rock', 'paper', 'scissors'];

const PlayerOne= {Name:"Joe" , getHandmethod: getHand}
const PlayerTwo = {Name:"Nancy", getHandmethod: getHand}

function getHand(){
    return Hand[parseInt(Math.random()*10)%3];
}


function playRound(PlayerOne,PlayerTwo){
    let player1 = PlayerOne.getHandmethod();
    let player2 = PlayerTwo.getHandmethod();

    console.log(PlayerOne.Name,player1 );
    console.log(PlayerTwo.Name,player2);

    if (player1 === player2) {
        console.log("it's a tie");
        return null;
    }else if (player1 === "rock" && player2 === "scissors") {
        console.log( "Rock wins!");
        return PlayerOne;
    }else if (player1 === "scissors" && player2 === "paper"){
        console.log("Scissor wins!");
        return PlayerOne;
    }else if (player1 === "paper" && player2 === "rock"){
        console.log("Paper wins!");
        return PlayerOne;
    }else if (player1 === "scissors" && player2 === "rock"){
        console.log("Scissors wins!");
        return PlayerTwo;
    }else if (player1 === "paper" && player2 === "scissors"){
        console.log("Paper wins");
        return PlayerTwo;
    }else if (player1 === "rock" && player2 === "paper"){
        console.log("Rock wins!");
        return PlayerTwo;
    }
}



const playUntill=5;
let player1Wins= 0;
let player2Wins= 0;

function playGame(PlayerOne, PlayerTwo,playUntill=5){
    let game = playRound(PlayerOne, PlayerTwo)
    if(game === PlayerOne){
        player1Wins+=1;
        console.log('Joe:'+player1Wins)
        console.log('Nancy:'+player2Wins)
    }else if (game == PlayerTwo){
        player2Wins+=1;
        console.log('Joe:'+player1Wins)
        console.log('Nancy:'+player2Wins)
    }
    if (player1Wins == playUntill || player2Wins == playUntill){
    return [game]

    }
    return playGame(PlayerOne,PlayerTwo)
}



console.log(playGame(PlayerOne, PlayerTwo,playUntill))
