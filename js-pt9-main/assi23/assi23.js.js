var userInput = parseFloat(prompt("Enter a positive number:"));

if (userInput > 0) {

    document.write("Number: " + userInput + "<br>");

    var roundOffValue = Math.round(userInput);
    document.write("Round off value: " + roundOffValue + "<br>");

    var floorValue = Math.floor(userInput);
    document.write("Floor value: " + floorValue + "<br>");

    var ceilValue = Math.ceil(userInput);
    document.write("Ceil value: " + ceilValue + "<br>");
} else {
    alert("Please enter a positive number!");
}





var userInput = parseFloat(prompt("Enter a negative floating-point number:"));


if (userInput < 0) {

    document.write("Number: " + userInput + "<br>");

    var roundOffValue = Math.round(userInput);
    document.write("Round off value: " + roundOffValue + "<br>");

    var floorValue = Math.floor(userInput);
    document.write("Floor value: " + floorValue + "<br>");

    var ceilValue = Math.ceil(userInput);
    document.write("Ceil value: " + ceilValue + "<br>");
} else {
    alert("Please enter a negative floating-point number!");
}





var num = parseFloat(prompt("Enter a number:"));

// Calculate the absolute value
var absoluteValue = Math.abs(num);

document.write("The absolute value of " + num + " is " + absoluteValue);




var diceRoll = Math.floor(Math.random() * 6) + 1;

document.write("You rolled a dice and got: " + diceRoll);






var tossResult = Math.random() < 0.5 ? "Heads" : "Tails";

document.write("The result of the coin toss is: " + tossResult);





var randomNumber = Math.floor(Math.random() * 100) + 1;

document.write("The random number between 1 and 100 is: " + randomNumber);






var userInput = prompt("Please enter your weight:");

var parsedWeight = parseFloat(userInput);

if (!isNaN(parsedWeight)) {
    document.write("Your weight is: " + parsedWeight + " kg");
} else {
    document.write("Invalid weight input. Please enter a valid weight.");
}







var secretNumber = Math.floor(Math.random() * 10) + 1;

var userGuess = parseInt(prompt("Guess the secret number between 1 and 10:"));

if (userGuess === secretNumber) {
    alert("Congratulations! You guessed the secret number!");
} else {
    alert("Oops! The secret number was " + secretNumber + ". Try again!");
}





