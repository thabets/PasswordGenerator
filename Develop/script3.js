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
  }
  console.log(length);
  //Logging if lower case characters are wanted & Function

  var lower = window.confirm(
    "Would you like there to be lower case characters?"
  );
  //TODO need to add an array over here to insert the lower randomized letters
  function lowerCase(lower) { //TODO need to add a forloop within the function to insert items into the array.
    var low = lower ? Math.floor(Math.random() * 26) + 97 : "";
    return String.fromCharCode(low);
  }
  
  console.log(lowerCase(lower));
  //Logging if upper case characters are wanted & Function

  var upper = window.confirm(
    "Would you like there to be upper case characters? "
  );
  if (upper) {
    function getUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
  } else {
    function getUpper() {
      return "";
    }
  }
  console.log(upper);
  //Logging if numbers are wanted

  var number = window.confirm("Would you like there to be numbers? ");
  if (number) {
    function getNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    }
  } else {
    function getNumber() {
      return "";
    }
  }
  console.log(number);
  //Random Symbol & Function

  var symbols = window.confirm(
    "Would you like there to be random symbols added to the password? "
  );
  if (symbols) {
    function getSymbols() {
      const symbols = "!@#$%^&*/,.";
      const symbolspass = [Math.floor(Math.random() * symbols)];
      console.log(symbolspass);
      return symbolspass;
    }
  } else {
    function symbols() {
      return "";
    }
  }
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
