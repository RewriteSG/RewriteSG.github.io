const scoreBox = document.getElementById("t_ScoreBox");
const popAudio = new Audio("bin/pop_sound.mp3");
var score = 0;
var durianClicked = false; // Variable to track if durian has been clicked
var canClick = true; // Variable to control click behavior
function UpdateScore() {
    score++;
    scoreBox.innerText = "Score: " + score;
}
function ResetScore() {
    score = 0;
    scoreBox.innerText = "Score: " + score;
}
const durian = document.getElementById("i_Durian");
function RandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function MoveDurian()
{
    durian.style.left = RandomValue(0, 500) + "px"; 
    durian.style.top = RandomValue(0, 500) + "px";
    durian.style.rotate = RandomValue(0, 360) + "deg"; // Random rotation for the durian
}
function HideDurian() {
    durian.classList.add("Clicked"); // Add a class to hide the durian
    setTimeout(
        function() {
            canClick = false; // Disable clicking while durian is hidden
        }, 500); // Delay to hide the durian

}
function ShowDurian() {
    durian.classList.remove("Clicked"); // Add a class to hide the durian
    canClick = true; // Enable clicking when durian is shown
}
function SpawnNewDurian() {
    HideDurian(); // Hide the durian before moving it
    setTimeout(function() {
        MoveDurian();
        ShowDurian(); // Show the durian after moving
    }, 500); // Delay to show the durian after moving
    durianClicked = false; // Reset the flag when a new durian is spawned
}

durian.addEventListener("click", function() {
    if(!canClick) return; // Prevent clicking if durian is hidden
    canClick = false; // Disable clicking while durian is hidden

    UpdateScore();
    popAudio.play(); // Play the pop sound
    SpawnNewDurian(); // Spawn a new durian after clicking
    durianClicked = true; // Set the flag to true when durian is clicked
});
ResetScore();
ShowDurian(); // Initial call to show the durian
setInterval(function()
{
    if (!durianClicked) { // Only move the durian if it hasn't been clicked
        ShowDurian();
        MoveDurian();
    }
    durianClicked = false; // Reset the flag after moving the durian
}, 1500); // Move the durian every 2 seconds
