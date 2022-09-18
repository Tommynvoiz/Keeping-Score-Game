const p1 = {
    score: 0,
    display: document.querySelector('#score1'),
    button: document.querySelector('.btn-primary'),
    name: ""
}
const p2 = {
    score: 0,
    display: document.querySelector('#score2'),
    button: document.querySelector('.btn-secondary'),
    name: ""
}
const displayNameP1 = document.querySelector('#name1');
const displayNameP2 = document.querySelector('#name2');
const reset = document.querySelector('.btn-warning');
const pickSide = document.querySelector('.pick-side');
const selectScore = document.querySelector('#score-select');
const theWinnerIs = document.querySelector('#who-is');

let playerName1 = " ";
let playerName2 = " ";
let isGameOver = false;
let winningScore = 0; 

pickNewSide(playerName1, playerName2);

selectScore.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    resetGame();
})


p1.button.addEventListener("click", function() {
    updateScore(p1,p2);
});
p2.button.addEventListener("click", function() {
    updateScore(p2,p1);
});
reset.addEventListener('click', resetGame);

pickSide.addEventListener('click', pickNewSide);


function pickNewSide(playerName1, playerName2){
    playerName1 = prompt("Add name of Player-1");
    displayNameP1.textContent = playerName1.toUpperCase();
    p1.name = playerName1;
    playerName2 = prompt("Add name of Player-2");
    displayNameP2.textContent = playerName2.toUpperCase();
    p2.name = playerName2;
    resetGame();
}


function updateScore (player, oponents){
    if(!isGameOver && winningScore!=0){
        player.score += 1;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('winner');
            oponents.display.classList.add('loser');
            player.button.disabled = true;
            oponents.button.disabled = true;
        }
        player.display.textContent = player.score;
        if(player.score > oponents.score){
            theWinnerIs.textContent = `${player.name.toUpperCase()} is winning so far`;
        }
        if(player.score === oponents.score){
            theWinnerIs.textContent = "Is a Tie";
        }
        if(player.score === winningScore){
            theWinnerIs.textContent = `${player.name.toUpperCase()} is the WINNER!!!`;
        }
    }
}

function resetGame(){
    p1.score = 0;
    p2.score = 0;
    isGameOver = false;
    p1.display.textContent = p1.score;
    p2.display.textContent = p2.score;
    p1.display.classList.remove('winner');
    p1.display.classList.remove('loser');
    p2.display.classList.remove('winner');
    p2.display.classList.remove('loser');
    p1.button.disabled = false;
    p2.button.disabled = false;
    theWinnerIs.textContent = "Who will win?";
}