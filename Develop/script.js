// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    var pwLength = 0;
    //Array with valid characters of all possible types and whether they've been selected.
    var pwCharTypes = [[false, "abcdefghijklmnopqrstuvwxyz"],
                       [false, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
                       [false, "1234567890"],
                       [false, "!@#$%^&*()-=_+[]{}|;':,.<>/?"]];
    
    //String with all valid characters
    var validChars = "";
    //Variable for password-in-progress                   
    var passwordBuild = "";

    //Asks the user for a password length until they give a valid one
    do {
      pwLength = prompt("Enter a length for your password (8-128 chars):");
      console.log("1: " + pwLength);
    } while ((pwLength > 128) || (pwLength < 8));
    do {
      //Checks whether the user has entered a valid character type
      var valid = false;
      //Prompts the user to select character types by entering a string with characters corresponding to each type.
      var pwInput = prompt("Enter the character types you want in your password.\n'a' for lowercase letters\n'b' for UPPERCASE LETTERS\n'c' for numb3r5\n'd' for $pec!al characters");
      pwInput.toLowerCase();
      console.log("2: " + pwInput);
      for (var i = 0; i < pwInput.length; i++) {
        //Checks each character input for validity, then modifies the pwCharTypes array to mark it as active
        switch (pwInput[i]) {
          case "a":
            pwCharTypes[0][0] = true;
            valid = true;
            break;
          case "b":
            pwCharTypes[1][0] = true;
            valid = true;
            break;
          case "c":
            pwCharTypes[2][0] = true;
            valid = true;
            break;
          case "d":
            pwCharTypes[3][0] = true;
            valid = true;
            break;
        }
      }

      //Checks if the user has entered at least 1 valid character type
      if (!valid) {
        alert("Please only enter the characters a, b, c, or d.");
      }
      console.log("3: " + valid);
    } while (!valid);
    //Adds selected character types to the list of valid characters to build the password from
    for (i = 0; i < pwCharTypes.length; i++) {
      if (pwCharTypes[i][0]) {
        validChars += pwCharTypes[i][1];
      }
    }
    console.log("4: " + validChars);
    console.log("4.5: " + pwLength);
    //Generates a random valid character, then adds it to the password until the appropriate length has been reached.
    for (i = 0; i < pwLength; i++) {
      genChar = validChars[Math.floor(Math.random() * validChars.length)];
      passwordBuild += genChar;
      console.log("4.7: " + genChar);
      console.log("5: " + passwordBuild);
    }
    return passwordBuild;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
