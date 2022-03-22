// Assignment Code
var generateBtn = document.querySelector("#generate");

//Array Characters
var spcial = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '[', ']', '|', '~', '`', '/', '?', ':'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//function

function question() {
    var isValid = false;
    do {
        var askNumbers = confirm("")
        var length = prompt("")
        var askUpperCase = confirm("");
        var askLowerCase = confirm("");
        var askSpecial = confirm("");
        var responses = {
            askSpecial: askSpecial,
            askUpperCase:  askUpperCase,
            askLowerCase: askLowerCase,
            askNumbers: askNumbers,
            length: length
        }
        if((length < 8)||(length > 128))
        alert ("Choose number between 8 and 128");
        else if((!askNumbers)&&(!askLowerCase)&&(askUpperCase)&&(!askSpecial))
        alert("Must choose at least one type.");
        else
        isValid =true
    } while(!isValid);
    return responses;
}

function generatePassword() {
    var possibleCombo = [];
    var passwordOptions = question();
    var finalPassword = "";

    if (passwordOptions.askLowerCase) {
        for (var i of upperCase)
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


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
