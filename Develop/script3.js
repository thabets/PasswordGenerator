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
    //Applying the array to the charcode resulting in a string.
    return String.fromCharCode.apply(String, lowerCa);
  }
  console.log(lowerCase(lower));

  //Logging if upper case characters are wanted & Function

  var upper = window.confirm(
    "Would you like there to be upper case characters? "
  );
  function upperCase(upper) {
    var result;
    var upperCa = [];
    if (upper) {
      for (let i = 0; i < length; i++) {
        result = Math.floor(Math.random() * 26) + 65;
        upperCa.push(result);
      }
    } else {
      return "";
    }

    return String.fromCharCode.apply(String, upperCa);
  }

  console.log(upperCase(upper));

  //Logging if numbers are wanted

  var number = window.confirm("Would you like there to be numbers? ");
  function num(number) {
    var result;
    var digit = [];
    if (number) {
      for (let i = 0; i < length; i++) {
        result = Math.floor(Math.random() * (9 + 1));
        digit.push(result);
      }
    } else {
      return "";
    }
    let digitString = digit.join("");

    return digitString;
  }

  console.log(num(number));

  //Random Symbol & Function
  //Confirming if a symbol is required
  var symbols = window.confirm(
    "Would you like there to be random symbols added to the password? "
  );
  //Function to extract the amount of symbols
  function getSymbol(symbols) {
    //Setting Symbol Array Variable
    var sym = ["!", "@", "#", "$", "%", "^", "&", "*", "/", "."];
    //Setting result variable for the random function within the array
    var result;
    //Setting empty array for the results to be pushed in
    var symbol = [];
    //Setting an array for the random symbols to be added to them
    var ar = [];
    //If statement to run a forloop in case symbol is chosen and to return an empty statement if not
    if (symbols) {
      //Establishing forloop
      for (let i = 0; i < length; i++) {
        //Adding the randomized numbers with a max of 9 based on the length of the symbols array
        result = Math.floor(Math.random() * (9 + 1));
        //Pushing the numbers into symbols array
        symbol.push(result);
        //Setting bar variable from sym array
        var bar = Array.from(sym);
        //Extract the symbols from sym array through the method of matching the bar with the specific randomized number put into the symbol array. This will allow it through the for loop to extract each individual symbol
        //Pushing the symbols into the ar array
        ar.push(bar[symbol[i]]);
      }
      //Returning an empty item in the case symbols was not chosen
    } else {
      return "";
    }
    return (symbolString = ar.join(""));
  }
  console.log(getSymbol(symbols));

  //Setting variables for all the functions above to be randomized
  const lowercase = lowerCase(lower);
  const uppercase = upperCase(upper);
  const figure = num(number);
  const sign = getSymbol(symbols);
  //Combining all elements into one string for randomization
  let compResultString = lowercase + uppercase + figure + sign;
  //Function to shuffle all elements that are requested and combine them into the final password
  function shuffle(compResultString) {
    //Spliting the string into an array to be randomized
    let array = compResultString.split("");
    //Shuffling or randomizing array
    const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
    //Slicing the array to the length requested
    const finalPasswordArray = shuffledArray.slice(0, length);
    //Returning a string that was converted from an array.
    return (finalPassword = finalPasswordArray.join(""));
  }
  console.log(shuffle(compResultString));
}

generateBtn.addEventListener("click", writePassword);
