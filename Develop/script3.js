// Assignment Code
var generateBtn = document.getElementById("generate");

//Getting the length
function writePassword() {
  var length = window.prompt(
    "How long would you like your password to be? Please choose a number between 8 to 128 characters"
  );
  if (length > 128 || length < 8) {
    return "Sorry, we are unable to process your request. Please try again!";
  } else {
    window.alert("Thank you");
  } //TODO split into two functions where write password will initiate the length if it does not pass it will stop or if it does pass it will go on to the next function. So need to focus on the else statement, possible solutions is to remove the window alert or thank you message and have it call another function. That is if we are unable to do both.
  console.log(length);
  //Logging if lower case characters are wanted & Function

  var lower = window.confirm(
    "Would you like there to be lower case characters?"
  );
  //TODO need to add an array over here to insert the lower randomized letters
  function lowerCase(lower) {
    //TODO need to add a forloop within the function to insert items into the array.
    var low = lower ? Math.floor(Math.random() * 26) + 97 : "";
    return String.fromCharCode(low);
  }

  console.log(lowerCase(lower));

  
  //Logging if upper case characters are wanted & Function

  var upper = window.confirm(
    "Would you like there to be upper case characters? "
  );
  function upperCase(upper) {
    var up = upper ? Math.floor(Math.random() * 26) + 65 : "";
    return String.fromCharCode(up);
  }
  
  console.log(upperCase(upper));


  //Logging if numbers are wanted

  var number = window.confirm("Would you like there to be numbers? ");
  function num(number) {
    var digit = number ? Math.floor(Math.random() * (99 + 1)) : "";
    return digit;
  }

  console.log(num(number));



  //Random Symbol & Function

  var symbols = window.confirm(
    "Would you like there to be random symbols added to the password? "
  );
  function getSymbol(symbols) {
    var sym = ["!", "@", "#", "$", "%", "^", "&", "*", "/", "."];
    const symbolspass = [Math.floor(Math.random() * (9 + 1))];
    return sym[symbolspass];
  }
  console.log(getSymbol(symbols));
  
}
// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.getElementById("password");

//   passwordText.value = password;
// }

//Assigning constant characters

const range = length;
// const lowerCase = getLower;
// const upperCase = getUpper;

// console.log(range + lowerCase + upperCase);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
