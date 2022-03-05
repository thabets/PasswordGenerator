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


  //Logging if lower case characters are wanted

  var lower = window.confirm(
    "Would you like there to be lower case characters?"
  );

  //Function to provide a list of randomized letters within a string.

  function lowerCase(lower) {
    //Declaring a result variable that will be used for establishing the randomized numbers within the forloop
    var result;
    //Declaring an array for the randomized numbers from results to be put into
    var lowerCa = [];
    //Declaring if Lower is true to run the forloop and if not to return an empty string
    if (lower) {
      for (let i = 0; i < length; i++) {
        result = Math.floor(Math.random() * 26) + 97;
        lowerCa.push(result);
      }
    } else {
      return "";
    }
    console.log(lowerCa);
    //Applying the array to the charcode resulting in a string.
    return String.fromCharCode.apply(String, lowerCa);
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
    const symbolspass = symbols ? [Math.floor(Math.random() * (9 + 1))] : "";
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
