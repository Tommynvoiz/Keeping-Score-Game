const display1 = document.querySelector('#score1');
const display2 = document.querySelector('#score2');
const name1 = document.querySelector('#name1');
const name2 = document.querySelector('#name2');
const player1 = document.querySelector('.btn-primary');
const player2 = document.querySelector('.btn-secondary');
const reset = document.querySelector('.btn-warning');
const selectScore = document.querySelector('#score-select');


let pName1 = prompt("Player-1 add 3 letter name");
name1.textContent = pName1.toUpperCase();
let pName2 = prompt("Player-2 add 3 letter name");
name2.textContent = pName2.toUpperCase();
let score1 = 0;
let score2 = 0;
let isGameOver = false;
let winningScore = 0; 

player1.addEventListener("click", function() {
    if(!isGameOver && winningScore!=0){
        score1 += 1;
        if(score1 === winningScore){
            isGameOver = true;
            display1.classList.add('winner');
            display2.classList.add('loser');
            player1.disabled = true;
            player2.disabled = true;
        }
        display1.textContent = score1;
    }
});
player2.addEventListener("click", function() {
    if(!isGameOver && winningScore!=0){
        score2 += 1;
        if(score2 === winningScore){
            isGameOver = true;
            display2.classList.add('winner');
            display1.classList.add('loser');
            player1.disabled = true;
            player2.disabled = true;
        }
        display2.textContent = score2;
    }
});
selectScore.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    resetB();
})
reset.addEventListener('click', resetB);

function resetB(){
    score1 = 0;
    score2 = 0;
    isGameOver = false;
    display1.textContent = score1;
    display2.textContent = score2;
    display1.classList.remove('winner');
    display1.classList.remove('loser');
    display2.classList.remove('winner');
    display2.classList.remove('loser');
    player1.disabled = false;
    player2.disabled = false;
}