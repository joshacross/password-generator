// declaring variable arrays 
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "+", "-", ".", "/","<","?"];

// empty characterLength array
var characterLength = [];
// empty passwordValue array
var characterValues = [];

// reset value each time script runs
function resetValues() {
  characterLength = [];
  characterValues = [];
};

//prompt user for character length and password values
function getUserInput () {
  // alert welcome and notify rules of application
  window.alert("Welcome to Secure Password Generator!\n\nPlease have the following criteria available:\n\Length of password (between 8 and 128 characters)\n\u2022Select if lowercase, uppercase, numeric, and/or special characters are needed.");

  // receive character length
  characterLength = window.prompt("How many characters would you like your password to be?");
    // check to see if character values are not between 8 and 128
    if (characterLength < 8 || characterLength > 128 || isNaN(characterLength) === true || characterLength === "" || characterLength === null || characterLength === "null") {
        window.alert("please choose a number between 8 and 128");
        return getCharacterLength();
      // if values are between 8 and 128, log value
    } 

  // confirm if lowercase values are to be included in password
  lowercaseValues = window.confirm("Would you like your password to include lowercase values?");
  // if lowercase values is true, concatenate to characterValues array
  if (lowercaseValues) {
    characterValues = characterValues.concat(lowerCase); 
  }

  // confirm if uppercase values are to be included in password
  uppercaseValues = window.confirm("Would you like to include uppercase values?");
  // if uppercase values are to be included, concatenate to characterValues array
  if (uppercaseValues) {
    characterValues = characterValues.concat(upperCase);
  }

  //confirm if numbers are to be included in password
  numberValues = window.confirm("Would you like to include numbers?");

  // if numberValues is true concatenate to characterValues arry
  if (numberValues) {
    characterValues = characterValues.concat(number);
  }

  // confirm if special characters are to be included in password
  specialCharacterValues = window.confirm("Would you like to include special characters?");

  // if specialCharacterValues are to be included, concatenate to characterValues array
  if (specialCharacterValues) {
    characterValues = characterValues.concat(specialCharacters);
  }

  // conditional check to see if one of the values was true, if not return function
  if (lowercaseValues || uppercaseValues || numberValues || specialCharacterValues) {
    console.log("values selected");
  } else {
    alert("password must include either lowercase, uppercase, number, or special character values in order to generate a secure password");
    return generatePassword();
  };
};

function generatePassword() {
  //local empty array to hold random password values
  var selectedPassword = [];

  // reset values when script runs
  resetValues();

  // run get user input function to prompt for length and selected characters
  getUserInput();

  // loop through array to randomly generate password
  for (let i = 0; i < characterLength; i++) {
    let randomPassword = characterValues[Math.floor(Math.random() * characterValues.length)];
    selectedPassword = selectedPassword.concat(randomPassword);
  };

  // concatenate all values in array and return a new string
  var generatePassword = selectedPassword.join('');
  return generatePassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
