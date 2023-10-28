// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt user for password length
  var length = parseInt(prompt("How many characters do you want your password to be?"));

  // Validation password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128.");
    return;
  }

  // Prompt user character types
  var hasLower = confirm("Do you want to include lowercase letters?");
  var hasUpper = confirm("Do you want to include upperCase letter?");
  var hasNumeric = confirm("Do you want to include numbers?");
  var hasSpecial = confirm("Do you want to include special characters?");

  // Validate character types
  if (!hasLower && !hasUpper && !hasNumeric && !hasSpecial) {
    alert("You must select at least one character type.");
    return;
  }

  // Return an object with password options
  return {
    length: length,
    hasLower: hasLower,
    hasUpper: hasUpper,
    hasNumeric: hasNumeric,
    hasSpecial: hasSpecial
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  // Get a random index from the array
  var index = Math.floor(Math.random() * arr.length);

  // Return the element at that index
  return arr[index];
}

// Function to generate password with user input
function generatePassword() {
  // Get password options from user input
  var options = getPasswordOptions();

  // Check if options are valid
  if (!options) {
    return;
  }

  // Create an array of possible characters based on options
  var possibleCharacters = [];

  if (options.hasLower) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  }

  if (options.hasUpper) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  }

  if (options.hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  // Create an array of guaranteed characters based on options
  var guaranteedCharacters = [];

  if (options.hasUpper) {

    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }
  
  if (options.hasLower) {

    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.hasNumeric) {

    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasSpecial)

  guaranteedCharacters.push(getRandom(specialCharacters));

  // Replace some characters with guaranteed characters to ensure criteria are met
  for (var j = 0; j < guaranteedCharacters.length; j++) {
    password[j] = guaranteedCharacters[j];
  }

  // Return the generated password
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);