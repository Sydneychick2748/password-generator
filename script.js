
// this are the querySelectors that connects the variable to the Element in html 
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");
var resetBtn = document.querySelector("#reset")


// object  to store all possible characters  for all upper and lowercase letters, numbers, and characters)
const key_strings = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

// these are the variable that will store the data needed to create the password 
var randomString = "";
var optionsVariable = "";
var validEntry = false;
var validNumber = false;


//first part is the variable we are choosing, chained to a method that takes in two arguments - one for the event listener, and one for the function that should run when the event happens
//event listeners
generateBtn.addEventListener("click", writePassword);
resetBtn.addEventListener("click", resetPassword)


 //functions to run when event occurs
function resetPassword() {
  password.value = "";
  randomString = "";
  validEntry = false;
}

// this is the  function that generates a random password 
function writePassword() {
  //reset the old value when the user clicks
  password.value = "";
  randomString = "";
  optionsVariable = "";
  validEntry = false;

// this gives the length of the password from the user and tests  to make sure its the right length using a while loop and ternary operators
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
    
  }


// this gives the confirm box and then sets the variable to a ternary and  adds the object to the variable 
  var lowercases = window.confirm("Would you like to use Lowercase Letters?");
  if (lowercases) {
  lowercases = key_strings.lowercase;
    
  }
  console.log(lowercases);
  var uppercases = window.confirm("Would you like to use Uppercase Letters?");
  if (uppercases) {
  uppercases= key_strings.uppercase;
    
  }
  console.log(uppercases);
  var symbols = window.confirm("Would you like to use Special Characters?");
  if (symbols) {
  symbols = key_strings.symbol;
  }

  console.log(symbols);
  var numbers = window.confirm("Would you like to use Numbers?");
  if (numbers) {
  numbers  = key_strings.number;
  }
  

  // this runs a ternary to run the criteria for the alert if the conditions have a value other than false then the function is called and run again 
  if (
    lowercases === false &&
    uppercases === false &&
    numbers === false &&
    symbols === false
  ) {
    alert("You must chose at least one Password criteria.");
  return writePassword();
  } else {
    alert("You Have Successfully Created A Strong Password");
  }

  
//if the variables in the conditional have a value other than false, they will be concatenated with the optionsVariable
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

  // Generates a random password based on the criteria that have been selected using math. random 
  
  
  for (var i = 0; i < length; i++) {
  randomString += optionsVariable.charAt(
    Math.floor(Math.random() * optionsVariable.length)
    );

  password.value = randomString;
  }
  

}

