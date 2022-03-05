// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Randomized Functions

function getLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>";
  return symbols[Math.random() * symbols.length];
}

// Password Inquiry Function

function generatePassword() {
  let length = window.prompt(
    "How long would you like your password to be? Please choose a number between 8 to 128 characters"
  );
  var passwordLength = parseInt(length, 10);
  if (length > 128 || length < 8 || passwordLength === number) {
    alert("Sorry, we are unable to process your request. Please try again!");
  } else {
    let lower = confirm("Would you like there to be lowercase characters?");
    let upper = confirm("Would you like there to be uppercase characters?");
    let numeric = confirm("Would you like there to be numbers?");
    let special = confirm("Would you like there to be special characters?");
    console.log(passwordLength);
    return generator(lower, upper, numeric, special, length);
  }
}

// Password Generator

function generator(passwordLength, lower, upper, number, special) {
  for (i = 8; i < passwordLength; i++) {
    console.count();
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
