# TicTacToe-Game
Front End JavaScript Project

## Description
A simple tic-tac-toe game implemented in JavaScript.

## How to Play
1. Open the HTML file in a web browser.
2. Two players take turns to click on the grid cells to make their moves.
3. The first player to get 3 in a row (horizontally, vertically, or diagonally) wins.
4. The game can be reset by clicking a "Reset" button.

## Technologies Used
- HTML
- CSS
- JavaScript

## Game Logic
- The game board is represented as a 2D array.
- Players' moves are recorded and checked for a win condition after each move.
- The game ends when a player wins or the board is full (a draw).

## Code Example
```javascript
// JavaScript code snippet demonstrating the game logic

// Grid functionality
    box1.onclick = function () {
    markX(box1);
    changeTurns();
    checkWinner();
    }
    box2.onclick = function () {
    markX(box2);
    changeTurns();
    checkWinner();
    
    }
    box3.onclick = function () {
    markX(box3);
    changeTurns();
    checkWinner();
    
    }
    box4.onclick = function () {
    markX(box4);
    changeTurns();
    checkWinner();
    
    }
    box5.onclick = function () {
    markX(box5);
    changeTurns();
    checkWinner();
    }
    box6.onclick = function () {
    markX(box6);
    changeTurns();
    checkWinner();
    }
    box7.onclick = function () {
    markX(box7);
    changeTurns();
    checkWinner();
    }
    box8.onclick = function () {
    markX(box8);
    changeTurns();
    checkWinner();
    }
    box9.onclick = function () {
    markX(box9);
    changeTurns();
    checkWinner();
    }

// Function to check for a win
function checkWinner() {
    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box3.innerHTML === box1.innerHTML) {
        turn.innerText = box1.innerHTML + "'s WIN!";
    }
    if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box9.innerHTML === box1.innerHTML) {
        turn.innerText = box1.innerHTML + "'s WIN!";
    }
    if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box7.innerHTML === box1.innerHTML) {
        turn.innerText = box1.innerHTML + "'s WIN!";
    }
    if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
        turn.innerText = box2.innerHTML + "'s WIN!";
    }
    if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
        turn.innerText = box3.innerHTML + "'s WIN!";
    }
    if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
        turn.innerText = box3.innerHTML + "'s WIN!";
    }
    if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
        turn.innerText = box4.innerHTML + "'s WIN!";
    }
}


// Function to make a move
function markX(ele) {
    if (ele.innerText === "" &&
        turn.innerText === "X's Turn") {
        ele.innerText = "X"
    }
    if (ele.innerHTML === "" &&
        turn.innerText === "O's Turn") {
        ele.innerText = "O"
    }
}
