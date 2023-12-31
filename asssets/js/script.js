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
  // Get references to the modal and its elements
  const optionsModal = document.getElementById('optionsModal');
  const optionsConfirmBtn = document.getElementById('optionsConfirm');

  // Get references to input elements within the modal
  const passwordLengthSlider = document.getElementById('passwordLength');
  const passwordLengthValue = document.getElementById('passwordLengthValue');
  const includeLowerInput = document.getElementById('includeLower');
  const includeUpperInput = document.getElementById('includeUpper');
  const includeNumbersInput = document.getElementById('includeNumbers');
  const includeSpecialInput = document.getElementById('includeSpecial');

  // Display the modal
  optionsModal.style.display = 'block';

  // Initialize the password length value
  passwordLengthValue.textContent = passwordLengthSlider.value;

  // Add an event listener to update the displayed value when the slider changes
  passwordLengthSlider.addEventListener('input', function() {
    passwordLengthValue.textContent = passwordLengthSlider.value;
  });

  // Add an event listener to confirm options and generate the password
  optionsConfirmBtn.addEventListener('click', () => {
    const length = parseInt(passwordLengthSlider.value);
    const hasLower = includeLowerInput.checked;
    const hasUpper = includeUpperInput.checked;
    const hasNumbers = includeNumbersInput.checked;
    const hasSpecial = includeSpecialInput.checked;

    if (
      isNaN(length) ||
      length < 8 ||
      length > 128 ||
      (!hasLower && !hasUpper && !hasNumbers && !hasSpecial)
    ) {
      // Replace the existing alert with a more user-friendly error message
      alert('Please check your options:\n\n' +
        '- Password length must be between 8 and 128 characters.\n' +
        '- At least one option (lowercase, uppercase, numbers, or special characters) must be selected.\n\n' +
        'Please try again.');
    } else {
      // Close the modal
      optionsModal.style.display = 'none';
      // Generate the password based on the selected options
      generatePassword({ length, hasLower, hasUpper, hasNumbers, hasSpecial });
    }
  });

  // Add an event listener to close the modal
  document.querySelector('.btn-close').addEventListener('click', () => {
    optionsModal.style.display = 'none';
  });
}

// Function for getting a random element from an array
function getRandom(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Function to generate a password based on user input
function generatePassword(options) {
  const { length, hasLower, hasUpper, hasNumbers, hasSpecial } = options;

  const possibleCharacters = [];

  if (hasLower) {
    possibleCharacters.push(...lowerCasedCharacters);
  }

  if (hasUpper) {
    possibleCharacters.push(...upperCasedCharacters);
  }

  if (hasNumbers) {
    possibleCharacters.push(...numericCharacters);
  }

  if (hasSpecial) {
    possibleCharacters.push(...specialCharacters);
  }

  let password = '';

  for (let i = 0; i < length; i++) {
    password += getRandom(possibleCharacters);
  }

  // Set the generated password in the textarea
  document.getElementById('password').value = password;
}

// Get reference to the "Generate Password" button element
const generateBtn = document.getElementById('generate');

// Add an event listener to open the options modal when the button is clicked
generateBtn.addEventListener('click', () => {
  getPasswordOptions();
});

// Get reference to the "Copy Password" button element
const copyBtn = document.getElementById('copy');

// Add an event listener to copy the password to the clipboard when the button is clicked
copyBtn.addEventListener('click', () => {
  const passwordTextarea = document.getElementById('password');
  passwordTextarea.select();
  document.execCommand('copy');
  // You can also provide user feedback here (e.g., alert or tooltip) to indicate the copy action.
  alert('Password copied to clipboard');
});
