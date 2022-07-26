// Assignment Code
function generatePassword() {
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numericCharacters = ['0', '1','2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = [',', '.', '/', ';', '[', ']', '<', '>', '?', ':', '"', '{', '}', '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+'];
  var possibleCharacters = [];

  numberOfCharacters = prompt("Chose the length of your password. It can be between 8-128 characters.");
    if (numberOfCharacters < 8 || numberOfCharacters > 128) {
      return "please choose a number of characters between 8-128.";
    } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("please choose a number of characters between 8-128.");
    }
    else {
      alert("your password will be " + numberOfCharacters + " characters long.");
    }  

  hasLowercase = confirm("Do you want lowercase characters?");
    if (hasLowercase) {
      var turnToLowercase = alert("Your password will have lowercase characters.");
    }
    else {
      alert("your password will not have lowercase characters.");
    }

  hasUppercase = confirm("Do you want uppercase characters?");
    if (hasUppercase) {
      alert("Your password will have uppercase characters.");
    }
    else {
      alert("your password will not have uppercase characters.");
    }

  hasNumbers = confirm("Do you want numbers characters?");
    if (hasNumbers) {
      alert("Your password will have numbers characters.");
    }
    else {
      alert("your password will not have numbers characters.");
    }

  hasSpecial = confirm("Do you want special characters?");
    if (hasSpecial) {
      alert("Your password will have special characters.");
    }
    else {
      alert("your password will not have special characters.");
    }

    if (hasLowercase) {
      possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    }
    if (hasUppercase) {
      possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    }
    if (hasNumbers) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
    }
    if (hasSpecial) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
    }
  
    let finalPassword = ""
    for (let i = 0; i < numberOfCharacters; i++) {
      let rng =[Math.floor(Math.random() * possibleCharacters.length)];
      finalPassword = finalPassword + possibleCharacters[rng];
    }
    return finalPassword;
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