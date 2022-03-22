// Assignment Code
var generateBtn = document.querySelector("#generate");

//Array Characters
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '[', ']', '|', '~', '`', '/', '?', ':'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//function

function questions() {
    var isValid = false;
    do {
        var askNumbers = confirm("Do you want your password to include numbers?");
        var length = prompt("Choose a number between 8 and 128 characters to indicate password length");
        var askUpperCase = confirm("Do you want your password to include upper case letters?");
        var askLowerCase = confirm("Do you want your password to include lower case letters?");
        var askSpecial = confirm("Do you want your password to include special characters?");
        var responses = {
            askSpecial: askSpecial,
            askUpperCase:  askUpperCase,
            askLowerCase: askLowerCase,
            askNumbers: askNumbers,
            length: length
        }
        if((length < 8)||(length > 128))
        alert("Choose number between 8 and 128");
        else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
        alert("Must choose at least one type.");
        else
        isValid = true;

    } while(!isValid);
    return responses;
}

function generatePassword() {
    var possibleCombo = [];
    var passwordOptions = questions();
    var finalPassword = "";

    if (passwordOptions.askLowerCase) {
        for (var i of lowerCase)
        possibleCombo.push(i);
    }
    if (passwordOptions.askNumbers) {
        for (var i of numbers)
        possibleCombo.push(i);
    }
    if (passwordOptions.askSpecial) {
        for (var i of special)
        possibleCombo.push(i);
    }

    if (passwordOptions.askUpperCase) {
        for (var i of upperCase)
        possibleCombo.push(i);
    }

    console.log(possibleCombo);

    for (var i = 0; i < passwordOptions.length; i++) {
        finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
    }
    console.log(finalPassword);

    return finalPassword;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
