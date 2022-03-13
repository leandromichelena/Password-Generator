// Assignment code here
const upperCharSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCharSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numberCharSet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialCharSet = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var lowerChar = true;
var upperChar = true;
var numberChar = true;
var specialChar = true;

function promptLowerChar() {
  lowerChar = window.confirm("Would you like your password to contain LOWERCASE characters?");
  return lowerChar;
};

function promptUpperChar() {
  upperChar = window.confirm("Would you like your password to contain UPPERCASE characters?");
  return upperChar;
}

function promptNumberChar() {
  numberChar = window.confirm("Would you like your password to contain NUMBERS?");
  return numberChar;
}

var promptSpecialChar = function () {
  specialChar = window.confirm("Would you like your password to contain SPECIAL characters?");
  return specialChar;
};

var validateSelection = function() {
  
  if (lowerChar || upperChar || numberChar || specialChar) {
    console.log("Character selection is Ok! Proceeding with selected char sets")
    // Continue to the next function
  }
  else {
    window.alert("Please select at least one character type to be included in your password.");
    return passChars(); // Restarts charSelection function
  };
};

var passChars = function() {
  // Prompt user for each of the char sets defined above
  promptLowerChar();
  promptUpperChar();
  promptNumberChar();
  promptSpecialChar();

  // Test the selection. If none of the char sets is selected, restarts
  validateSelection();

  // create the passChars array by concatenating the char set arrays 
  var charSet = [];
  if (lowerChar) {
    charSet = charSet.concat(lowerCharSet);
  }
  if (upperChar) {
    charSet = charSet.concat(upperCharSet);
  }
  if (numberChar) {
    charSet = charSet.concat(numberCharSet);
  }
  if (specialChar) {
    charSet = charSet.concat(specialCharSet);
  }
  // return passChars result
  console.log(charSet);
  return charSet;
};

var passLength = function() {
  var promptLength = window.prompt("How many characters would you like to include in your password? Type a number between 8 and 128 for your password length.");
  if (promptLength > 128 || promptLength < 8) {
    window.alert("Please type a number between 8 and 128. Try again.");
    return passLength();
  }
  else {
    return promptLength;
  };
};

function generatePassword(charsPool, numLength) {
  return 123
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var charsPool = passChars();
  var numLength = passLength();
  var password = generatePassword(charsPool, numLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
