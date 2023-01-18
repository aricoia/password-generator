// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = upperCase.toString().toLowerCase().split(",");
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "="];

var arrays = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = prompt(
    "Select a length for your password between 8 and 128 charcters."
  );
  if (passwordLength >= 8 && passwordLength <= 128) {
    selectSymbol();
    passwordRandom(passwordLength);
  } else {
    alert("Password must be a number between 8 and 128 characters.");
  }

  return retVal;
}

function passwordRandom(passwordLength) {
  retVal = "";
  for (var i = 0, n = arrays.length; i < passwordLength; ++i) {
    retVal += arrays[Math.floor(Math.random() * n)];
  }
  return retVal;
}

function selectSymbol() {
  if (confirm("Include uppercase?")) {
    arrays = arrays.concat(upperCase);
  }
  if (confirm("Include lowercase?")) {
    arrays = arrays.concat(lowerCase);
  }
  if (confirm("Include numbers?")) {
    arrays = arrays.concat(number);
  }
  if (confirm("Includes special characters?")) {
    arrays = arrays.concat(symbol);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
