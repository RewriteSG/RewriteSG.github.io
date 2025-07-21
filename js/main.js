//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const menuBtn=document.querySelector("#togglemenu");
var allpages=document.querySelectorAll(".page");
var isMenuOpen=false; //flag to track menu state

/*find references to all the buttons and ball */
const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");
const resetBtn = document.querySelector("#resetBtn");
const ball = document.querySelector("#ball");
var ballX = ballY = 0; //assign initial position of ball

//functions to update variables to control ball position
function ResetPos() 
{
    ballX=ballY=0; //reset to zero
    UpdateBallStyle();
}
function MovePos(leftInc, topInc) 
{
    ballX += leftInc;
    ballY += topInc;
    UpdateBallStyle();
}
function ClampValue(value, min, max) {
    return Math.max(min, Math.min(max, value)); //ensure value is within min and
}
//function to update ball css as well as display text
function UpdateBallStyle(){
    let onepage=document.querySelector("#page"+1);
    ballX = ClampValue(ballX, 0, onepage.clientWidth - ball.offsetWidth);
ballY = ClampValue(ballY, 0, onepage.clientHeight - ball.offsetHeight);

    ball.style.left = ballX+"px"; //set left property to ball x variable
    ball.style.top = ballY+"px"; //set top property to ball x variable
    ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
    console.log("Ball Position: " + ballX + "px ," + ballY + "px"); //for debugging
}
const speed = 10; //set speed of movement
function MoveLeft(){
MovePos(-speed,0);
}
function MoveRight(){
MovePos(speed,0);
}
function MoveUp(){
MovePos(0,-speed);
}
function MoveDown(){
MovePos(0,speed);
}
leftBtn.addEventListener("click", MoveLeft);
rightBtn.addEventListener("click", MoveRight);
upBtn.addEventListener("click", MoveUp);
downBtn.addEventListener("click", MoveDown);
document.addEventListener('keydown', (e) => 
{
    console.log(e);
    if (e.code === "ArrowRight"){
    MoveRight();
    }
    if (e.code === "ArrowLeft"){
    MoveLeft();
    }
    if (e.code === "ArrowDown"){
    MoveDown();
    }
    if (e.code === "ArrowUp"){
    MoveUp();
    }
    //Need to inform user what keys to press. Better option: use switch case instead
});
//select all subtopic pages
function hideall(){ //function to hide all pages
    for(let onepage of allpages)
    { //go through all subtopic pages
        onepage.style.display="none"; //hide it
    }
}
function show(pgno){ //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage=document.querySelector("#page"+pgno);
    onepage.style.display="block"; //show the page
}
function toggleMenu() { //function to toggle menu
    if (isMenuOpen) { //if menu is open
        document.querySelector("nav").style.display = "block"; //show it
    } else { //if menu is closed
        document.querySelector("nav").style.display = "none"; //hide it
    }
    isMenuOpen = !isMenuOpen; //set flag to true
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
show(1);
});
page2btn.addEventListener("click", function () {
show(2);
});
page3btn.addEventListener("click", function () {
show(3);
});
menuBtn.addEventListener("click", function () {
    toggleMenu();
});
toggleMenu(); //initially hide menu
hideall();
