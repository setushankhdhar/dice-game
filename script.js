var player1Name;
var player2Name;
function editName(){
    
    player1Name = prompt("Enter player 1 name:");
    player2Name = prompt("Enter player 2 name:");
    document.querySelector('#p1').innerText = player1Name;
    document.querySelector('#p2').innerText = player2Name;
}
function hello(){
    changeDice();
    changeText();
}
var imageURLs=[
    "d1.png",
    "d2.png",
    "d3.png",
    "d4.png",
    "d5.png",
    "d6.png",
];

var size;
var randomNum1;
var randomNum2;



function changeText() {
    
    var result = document.querySelector('.text');

    if (randomNum1 > randomNum2) {
        result.innerHTML = player1Name + " has won the match";
    } else if (randomNum1 < randomNum2) {
        result.innerHTML =  player2Name + " has won this match";
    } else {
        result.innerText = "OOPS! IT WAS A DRAW. PLAY AGAIN.";
    }
}
function changeDice() {
 size = imageURLs.length;
 randomNum1 = Math.floor(size*Math.random());
 randomNum2 = Math.floor(size*Math.random());
document.getElementById('image1').src = imageURLs[randomNum1];
document.getElementById('image2').src= imageURLs[randomNum2];
}













