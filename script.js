document.getElementById("password").value = password;
// Arrays of Numbers, Spec Chars, and Upper & Lower Case letters.
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
let lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Creating the PW function to gather details about the pw from users
function userPasswordOptions() {
  let length = parseInt(
    prompt ('How many characters would you like your password to contain? (between 8-129)'),
    10
  );

// Initiates the prompt if someone tries to submit anything other than a #
if (Number.isNaN(length)) {
    alert('Password length must be a number, please try again');
    return null;
  }

// Initiates the prompt if user tries to choose less than 8 characters
if (length < 8) {
    alert('Password length MUST be atleast 8 characters, please try again');
    return null;
  }

// Initiates the prompt if user tries to choose more than 129 characters
if (length > 128) {
    alert('Password length must be LESS than 129 characters, please try again');
    return null;
  }

// Boolean returns confirming the inclusion of all char types 1 by 1 and choosing message to send
  let hasNumericCharacters = confirm(
    'CLICK OK to confirm you would like to include numeric characters'
  );

  let hasSpecialCharacters = confirm(
    'CLICK OK to confirm you would like to include special characters'
  );

  let hasLowerCaseCharacters = confirm(
    'CLICK OK to confirm you would like to include lowercase characters'
  );

  let hasUpperCaseCharacters = confirm(
    'CLICK OK to confirm you would like to use uppercase characters'
  );

// Conditional statement?? The user must choose one (or all?) if not, it will throw an error to choose atleast 1?
if (
  hasNumericCharacters === false &&
  hasSpecialCharacters === false &&
  hasLowerCaseCharacters === false &&
  hasUpperCaseCharacters === false
) {
  alert('You must select atleast ONE character type');
  return null
}

// Storing what the user inputs to use later based off of their choices
  let passwordOptions = {
    length: length,
    hasNumericCharacters: hasNumericCharacters,
    hasSpecialCharacters: hasSpecialCharacters,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters,
  };
  return passwordOptions;
}

// chooses a random elment from one of the arrays
function pickRandom(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  let randElement = arr[randIndex];

  return randElement;
}

// generating pw based off of user input
function generatePassword() {
  let options = userPasswordOptions();
  let result = [];
  let possibleCharacters = [];
  let guaranteedCharacters = []; //guarantees atleast one of every character is used

if (!options) return null;

if (options.hasLowerCaseCharacters) {
  possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
  guaranteedCharacters.push(pickRandom(upperCaseCharacters));
}

if (options.hasUpperCaseCharacters) {
  possibleCharacters = possibleCharacters.concat(upperCaseCharacters);
  guaranteedCharacters.push(pickRandom(upperCaseCharacters));

if (options.hasSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat(specialCharacters);
  guaranteedCharacters.push(pickRandom(specialCharacters));
}
if (options.hasNumericCharacters) {
  possibleCharacters = possibleCharacters.concat(numericCharacters);
  guaranteedCharacters.push(pickRandom(numericCharacters));
}
}

for (let i = 0; i < options.length; i++) {
  let possibleCharacter = pickRandom(possibleCharacters);
  result.push(possibleCharacter);
}

for (let i = 0; i < guaranteedCharacters.length; i++) {
  result[i] = guaranteedCharacters[i];
}
console.log(result);
return result.join("");

}


let generateBtn = document.querySelector("#generate");


function writePassword() {
  let result = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = result;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(writePassword)

/* unsure of my EventListener above or if it need more info....
Here is another option i'm toggling for that area, below:

 generateBtn.addEventListener("click", writePassword) {
  let password = "";
 
for (var i=0; i <=passwordLength; i++) {
  let randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
}
 password_ele.innerText = password;

}
*/
