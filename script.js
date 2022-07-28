// Assignment code here

let lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";


let upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let specialChar = "~!@#$%^&*()_+{}[]:;'.<>./?|";

let numChar = "0123456789";


function lengthValidator(charValidator) {
  charValidator = prompt("How many characters would you like your password to be (8 - 128)");
  if (charValidator < 8 || charValidator > 128) {
    alert("Password must be between 8 and 128 characters");
    lengthValidator();
  }
  return charValidator;
}

charNum = lengthValidator();
charVar = +charNum


function confValidator(confUpper, confLower, confSpecial, confNum) {
confUpper = confirm("Would you like your password to contain uppercase letters?")
confLower = confirm("Would you like your password to contain lowercase letters?")
confSpecial = confirm("Would you like your password to contain special characters?")
confNum = confirm("Would you like your password to contain numbers?")

if (confUpper || confLower || confSpecial || confNum) {
  alert("Congratulations your password is being generated!")
  return [confUpper, confLower, confSpecial, confNum];
  
}
else {
  alert("Please choose at least one selection (uppercase, lowercase, special characters, numbers)");
  confValidator();
}
}

let confirmValid = confValidator();
console.log(confirmValid[0])
console.log(confirmValid[1])
console.log(confirmValid[2])
console.log(confirmValid[3])

let passString = ""


confirmValid[0] === true ? passString = passString.concat(upperCaseChar) : console.log("false")
confirmValid[1] === true ? passString = passString.concat(lowerCaseChar) : console.log("false")
confirmValid[2] === true ? passString = passString.concat(specialChar) : console.log("false")
confirmValid[3] === true ? passString = passString.concat(numChar) : console.log("false")


let finalPass = ""


function generatePassword(){ 
  finalPass = ""
  for (let i = 0; i < charVar; i++){
  finalPass += passString[Math.floor(Math.random() * passString.length)]
}
return finalPass
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
writePassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



  


