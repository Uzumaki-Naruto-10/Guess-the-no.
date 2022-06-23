// random value generated
  
// counting the number of guesses
// made for correct Guess
var guess = 1
  
// function for number guessed by user   
var y = Math.floor(Math.random() * 10 + 1);
var x = document.getElementById("guessField").value;
function submit() {
if(x==y) {
    alert("Congractulations!!!!" + playername + "you guessed it right in" + guess + "guess");
    guess = 1
}
else if(x > y) {
    guess++;
    alert("Oops Sorry!!! Try a smaller number");
}
else {
 guess++;
 alert("Oops Sorry!!! Try a greater number");
}

function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
}
}
