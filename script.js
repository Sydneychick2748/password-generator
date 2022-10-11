// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
// ```

// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");
var resetBtn = document.querySelector("#reset")
console.log(password, "p1")
// variables for all upper and lowercase letters, numbers, and characters)
const key_strings = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  // randomString : "",
  // optionsVariable:""
};
var randomString = "";
var optionsVariable = "";
var validEntry = false;
var validNumber = false;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 resetBtn.addEventListener("click", resetPassword)

function resetPassword() {
  password.value = "";
   randomString = "";
   validEntry = false;
}

// Write a function that generates a random password in the "text area" box
function writePassword() {
  //reset the old value when the user clicks
  password.value = "";
   randomString = "";
   optionsVariable = "";
   validEntry = false;
   var allSymbols = false;
  // Prevent the screen from refreshing when whe button is clicked
  //  event.preventDefault();

  while (validEntry === false) {
    var length = window.prompt(
      "Enter a number from 8 to 128 for Password length."
    );
    if (length < 8 || length > 128) {
      validEntry = false;
      alert(
        "Your password is not between 8 characters and 128 characters. Please try again."
      );
      length= window.prompt( "Enter a number from 8 to 128 for Password length.");
     } else {
      validEntry = true;
     }
    //  } else {
    //   validEntry = false;
    //  }
    console.log(length);
  }
// while(allSymbols === false){
  var lowercases = window.confirm("Would you like to use Lowercase Letters?");
  if (lowercases) {
    lowercases += key_strings.lowercase;
    console.log(password, "P2")
  }
  console.log(lowercases);
  var uppercases = window.confirm("Would you like to use Uppercase Letters?");
  if (uppercases) {
    uppercases+= key_strings.uppercase;
    
  }
  console.log(uppercases);
  var symbols = window.confirm("Would you like to use Special Characters?");
  if (symbols) {
    symbols += key_strings.symbol;
  }

  console.log(symbols);
  var numbers = window.confirm("Would you like to use Numbers?");
  if (numbers) {
    numbers  += key_strings.number;
  }
  console.log(numbers);

  // while(allSymbols === false && test===true){
  if (
    lowercases === false &&
    uppercases === false &&
    numbers === false &&
    symbols === false
  ) {
     alert("You must chose at least one Password criteria.");
   return writePassword();
  } else {
    alert("You Have Succefully Created A Strong Password");
  }

  // }
  //------------------------------ i need something here that will loop them back to the options

    if (lowercases) {
      optionsVariable += key_strings.lowercase;
  }

  if (uppercases) {
      optionsVariable += key_strings.uppercase;
  }

  if (numbers) {
      optionsVariable += key_strings.number;
  }

  if (symbols) {
      optionsVariable += key_strings.symbol;
  }

  // Generates a random password based on the criteria that have been selected
  // password.value === "";
  
  for (var i = 0; i < length; i++) {
   randomString += optionsVariable.charAt(
      Math.floor(Math.random() * optionsVariable.length)
    );
    console.log(randomString, "randostring")
    password.value = randomString;
  }
  
  console.log(password, "value");
}

