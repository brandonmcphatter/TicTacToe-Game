let turn = document.getElementById("turn");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");
let reset = document.getElementById("reset");
let score = 0;

// Reset the grid
    reset.onclick = function (){

        box1.innerText = "";
        box2.innerText = "";
        box3.innerText = "";
        box4.innerText = "";
        box5.innerText = "";
        box6.innerText = "";
        box7.innerText = "";
        box8.innerText = "";
        box9.innerText = "";

    }


function changeTurns() {
    if (turn.innerText === "X's Turn"){
        turn.innerText = "O's Turn";
    } else turn.innerText = "X's Turn";
}
function markX(ele) {
    if (ele.innerText === "" &&
        turn.innerText === "X's Turn"){
        ele.innerText = "X"
    }
    if (ele.innerHTML === "" &&
        turn.innerText === "O's Turn"){
        ele.innerText = "O"
    }
}

// Grid Functionality
box1.onclick = function (){
    markX(box1);
    changeTurns();
}
box2.onclick = function (){
    markX(box2);
    changeTurns();
}
box3.onclick = function (){
    markX(box3);
    changeTurns();
}
box4.onclick = function (){
    markX(box4);
    changeTurns();
}
box5.onclick = function (){
    markX(box5);
    changeTurns();
}
box6.onclick = function (){
    markX(box6);
    changeTurns();
}
box7.onclick = function (){
    markX(box7);
    changeTurns();
}
box8.onclick = function (){
    markX(box8);
    changeTurns();
}
box9.onclick = function (){
    markX(box9);
    changeTurns();
}





