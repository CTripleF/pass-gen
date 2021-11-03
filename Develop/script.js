// Assignment code here

//use class to hold values of selected modifiers
var criteria = {
  length = 0,
  cases: false,
  number: false,
  specialChar: false,
  //reset funtion to set all values to a default
  reset: function() {
    this.length = 0,
    this.cases = false,
    this.number = false,
    this.specialChar = false
  }
}

//ask for password length and verify valid input
function checkLengthInp()
{
  criteria.length = window.prompt ("How long would you like your password to be(min of 8 max of 128)");
  if ((criteria.length%1) != 0 || criteria.length < 8 || criteria.legth > 128) {
    alert("invalid input numbers");
    checkLengthInp();
  }
  else{}
}

function checkCriteria() {
  criteria.cases =  window.confirm("Would you like to use upper and lower case letters?")
  criteria.number =  window.confirm("Would you like to include numbers?")
  criteria.specialChar = window.confirm("Would you like to include special characters?")
}

function randomize () {
  var parameter="";
  var parameter1 = "abcdefghijklmnopqrstuvwxyz";
  var parameter2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var parameter3 = "0123456789";
  var parameter4 = "!@#$%^&*()_+-=";
  var password="";

  //check for possible combinations of password modifiers and apply selections to parameter
  if (criteria.cases && criteria.number && criteria.specialChar) {
    parameter = parameter1 + parameter2 + parameter3 + parameter4
  }
  else if (criteria.cases && criteria.number && criteria.specialChar === false ) {
    parameter = parameter1 + parameter2 + parameter3
  }
  else if (criteria.cases && criteria.number === false && criteria.specialChar) {
    parameter = parameter1 + parameter2 + parameter4
  }
  else if (criteria.cases === false && criteria.number && criteria.specialChar) {
    parameter = parameter1 + parameter3 + parameter4
  }
  else if (criteria.cases === false && criteria.number === false && criteria.specialChar) {
    parameter = parameter1 + parameter4
  }
  else if (criteria.cases == false && criteria.number && criteria.specialChar === false){
    parameter = parameter1 + parameter3
  }
  else {
    parameter = parameter1 + parameter2
  }

  //loop through criteria.length using Math.random and appropriate parameter to create a password
  for (i = 0; i < criteria.length; i++ ){
    var newChar = Math.floor(Math.random() * (parameter.length + 1));
    password = password + parameter.charAt(newChar);
    console.log(newChar);
  }
  return password;
}


function generatePassword() {
  checkLengthInp();
  //repeat modifier selection until at least one is chosen
  while(criteria.cases === false && criteria.number ===false  && criteria.specialChar === false) {
    criteria.reset();
    checkCriteria();
    window.alert("Please select at least one modifier.");
  }

  var result = randomize();
  return result;
}


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
