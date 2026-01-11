const player1Dice = document.querySelector('#player1 .dice');
const player2Dice = document.querySelector('#player2 .dice');
const button = document.getElementById('rollBtn');
const h1 = document.querySelector('h1');
const message = document.querySelector('h4');

let diceMap = {
    1 : [[2,2]],
    2 : [[1,1] , [3,3]],
    3 : [[1,1],[2,2] , [3,3]],
    4 : [[1,1] , [3,3] ,[1,3] , [3,1]],
    5 : [[1,1] , [2,2] , [3,3] ,[1,3] , [3,1] ],
    6 : [[1,1] , [2,1], [3,1] , [1,3], [2,3] , [3,3]]
};

function renderDice(num ,dContainer){
    dContainer.innerHTML = '';
    
    const position = diceMap[num];
    position.forEach(   ([r,c]) => {
        const dots = document.createElement('div');
        dots.classList.add('dot');
        dots.style.gridRow = r;
        dots.style.gridColumn = c;
        dContainer.appendChild(dots);
    })
    
}

function rollDice(){
    h1.textContent = "Rolling...";
    message.textContent = "";

    setTimeout(() =>{
    const num1 = Math.floor(Math.random() * 6) + 1;
    const num2 = Math.floor(Math.random() * 6) + 1;
        renderDice(num1 , player1Dice);
        renderDice(num2 , player2Dice);
        if(num1 > num2){
            h1.textContent = "Player 1 Wins!";
        }
        else if(num2 > num1){
            h1.textContent = "Player 2 Wins!";
        }
        else{
            h1.textContent = "It's a Tie!";
        }

        message.textContent = "Roll Dice Again!";
     }, 1800);
    
}

button.addEventListener('click', rollDice);
