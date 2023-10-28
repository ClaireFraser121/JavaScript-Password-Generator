// Array of special characters to be included in the password
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',',
  ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Array of numeric characters to be included in the password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in the password
var lowerCasedCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

// Array of uppercase characters to be included in the password
var upperCasedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Function to prompt the user for password options
function getPasswordOptions() {
  // Prompt the user for the desired password length
  var length = parseInt(prompt("How many characters do you want your password to be?"));

  // Validate password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128.");
    return null; // Return null to indicate an invalid input
  }

  // Prompt the user to select character types
  var hasLower = confirm("Include lowercase letters?");
  var hasUpper = confirm("Include uppercase letters?");
  var hasNumeric = confirm("Include numbers?");
  var hasSpecial = confirm("Include special characters?");

  // Validate selected character types
  if (!hasLower && !hasUpper && !hasNumeric && !hasSpecial) {
    alert("You must select at least one character type.");
    return null; // Return null to indicate an invalid input
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

// Function to generate a password based on user input
function generatePassword() {
  var options = getPasswordOptions();

  if (!options) {
    console.log('Invalid options. Exiting password generation.'); // Debugging
    return; // Exit if options are invalid
  }

  var possibleCharacters = [];

  // Include selected character types in possibleCharacters array
  if (options.hasLower) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  }

  if (options.hasUpper) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  }

  if (options.hasNumeric) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }

  if (options.hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  var password = [];

  // Generate the password by randomly selecting characters from possibleCharacters
  for (var i = 0; i < options.length; i++) {
    password.push(getRandom(possibleCharacters));
  }

  // Return the generated password as a string
  var generatedPassword = password.join('');
  console.log('Generated Password:', generatedPassword); // Debugging
  return generatedPassword;
}
// Get a reference to the #generate button element
var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', writePassword);

// Function to write the generated password to the #password input field
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  if (password) {
    passwordText.value = password;
    console.log('Password displayed:', password); // Debugging
  } else {
    passwordText.value = '';
    console.log('Password display skipped due to invalid options.'); // Debugging
  }
}


// Add an event listener to the #generate button, so the password is generated when the button is clicked
generateBtn.addEventListener('click', writePassword);
