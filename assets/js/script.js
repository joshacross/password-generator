// empty password array
var password = [];
// empty characterLength array
var characterLength = [];

// declaring variable arrays 
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "+", "-", ".", "/","<","?"];

function generatePassword () {
  // alert welcome and notify rules
  window.alert("Welcome to Secure Password Generator!\n\nPlease have the following criteria available:\n\Length of password (between 8 and 128 characters)\n\u2022Select if lowercase, uppercase, numeric, and/or special characters are needed.");
  // receive character length
  characterLength = window.prompt("How many characters would you like your password to be?");
    // check to see if character values are not between 8 and 128
    if (characterLength < 8 || characterLength > 128 || isNaN(characterLength) === true || characterLength === "" || characterLength === null || characterLength === "null") {
        window.alert("please choose a number between 8 and 128");
        return getCharacterLength();
      // if values are between 8 and 128, log value
    } else {
        console.log(characterLength);
    };
  lowercaseValues = window.confirm("Would you like your password to include lowercase values?");
  console.log(lowercaseValues);

  uppercaseValues = window.confirm("Would you like to include uppercase values?");
  console.log(uppercaseValues);

  numberValues = window.confirm("Would you like to include numbers?");
  console.log(numberValues);

  specialCharacterValues = window.confirm("Would you like to include special characters?");
  console.log(specialCharacterValues);

  // check to see if one of the values was true, if not return function
  if (lowercaseValues || uppercaseValues || numberValues || specialCharacterValues) {
    console.log("characterValues selected");
  } else {
    alert("password must include either lowercase, uppercase, number, or special character values in order to generate a secure password");
    return generatePassword();
  };
};

generatePassword();

// 3.) confirm lowerCase values + console.log 

/*


4.) Confirm UpperCase Values + console.log
5.) Confirm Number + console.log 
6.) Confirm Special Character + console.log

7.) If all false then return + alert 

8.) Store information into object - 

var inputtedAnswers = {
  characterLength: characterLength,
  hasLowerCase: hasLowerCase (true)
  hasUpperCase: hasUpperCase 
  ...

}
return inputtedAnswers
}

var userInfo = userInput();
var possibleCharacterOptions = [];
var usersCharacters =[];

if(userInfo.hasLowerCase) {
  possibleCharacterOptions = possibleCharacterOptions.concat(lowerCase);
  userCharacters.pus(getMathRandom(lowerCase)
)}

*/
























// // Assignment code here


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
