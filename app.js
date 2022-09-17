const display1 = document.querySelector('#score1');
const display2 = document.querySelector('#score2');
const player1 = document.querySelector('.btn-primary');
const player2 = document.querySelector('.btn-secondary');
const reset = document.querySelector('.btn-warning');
const selectScore = document.querySelector('#score-select');

let score1 = 0;
let score2 = 0;
let isGameOver = false;
let winningScore = 0; 

player1.addEventListener("click", function() {
    if(!isGameOver){
        score1 += 1;
        if(score1 === winningScore){
            isGameOver = true;
            display1.classList.add('winner');
            display2.classList.add('loser');
        }
        display1.textContent = score1;
    }
});
player2.addEventListener("click", function() {
    if(!isGameOver){
        score2 += 1;
        if(score2 === winningScore){
            isGameOver = true;
            display2.classList.add('winner');
            display1.classList.add('loser');
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
}