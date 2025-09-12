
const player1Dice = document.querySelector('#player1 .dice');
const player2Dice = document.querySelector('#player2 .dice');
const rollBtn = document.getElementById('rollBtn');
const h1 = document.querySelector('h1');
const message = document.getElementById('message');

const diceMap = {
    1: [[2,2]],
    2: [[1,1],[3,3]],
    3: [[1,1],[2,2],[3,3]],
    4: [[1,1],[1,3],[3,1],[3,3]],
    5: [[1,1],[1,3],[2,2],[3,1],[3,3]],
    6: [[1,1],[1,3],[2,1],[2,3],[3,1],[3,3]]
};

function renderDice(number, diceContainer) {
    diceContainer.innerHTML = '';
    const positions = diceMap[number];
    positions.forEach(([r,c]) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.gridRow = r;
        dot.style.gridColumn = c;
        diceContainer.appendChild(dot);
    });
}

function rollDice() {
    // clear dice instantly
    player1Dice.innerHTML = '';
    player2Dice.innerHTML = '';
    h1.textContent = "Rolling...";
    message.textContent = "";

    // after 1 second, show result
    setTimeout(() => {
        const num1 = Math.floor(Math.random() * 6) + 1;
        const num2 = Math.floor(Math.random() * 6) + 1;

        renderDice(num1, player1Dice);
        renderDice(num2, player2Dice);

        // determine winner
        if(num1 > num2) {
            h1.textContent = "Player 1 Wins!";
        } else if(num2 > num1) {
            h1.textContent = "Player 2 Wins!";
        } else {
            h1.textContent = "It's a Tie!";
        }

        // show roll again message
        message.textContent = "Roll Dice again!";
    }, 3800); // 1000ms = 1 second
}

rollBtn.addEventListener('click', rollDice);
