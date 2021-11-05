// Assignment code here

//use class to hold values of selected modifiers
var criteria = {
  len: 0,
  cases: false,
  number: false,
  specialChar: false,
  //reset funtion to set all values to a default
  reset: function() {
    this.len = 0,
    this.cases = false,
    this.number = false,
    this.specialChar = false
  }
}

//ask for password length and verify valid input
function checkInpLength()
{
  criteria.len = window.prompt ("How long would you like your password to be(min of 8 max of 128)");
  if ((criteria.len%1) != 0 || criteria.len < 8 || criteria.len > 128) {
    alert("invalid input");
    checkInpLength();
  }
  else{}
}

function checkCriteria() {
  while(criteria.cases === false && criteria.number ===false  && criteria.specialChar === false) {
    criteria.cases =  window.confirm("Would you like to use upper and lower case letters?")
    criteria.number =  window.confirm("Would you like to include numbers?")
    criteria.specialChar = window.confirm("Would you like to include special characters?")
    
    if (criteria.cases === false && criteria.number === false  && criteria.specialChar === false) {
      window.alert("Please select at least one modifier.");
    }
    else {
      break;
    }
  }
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

  //loop through criteria.len using Math.random and appropriate parameter to create a password
  for (i = 0; i < criteria.len; i++ ){
    var newPass = Math.floor(Math.random() * (parameter.length + 1));
    password = password + parameter.charAt(newPass);
    console.log(newPass);
  }
  //reset modifiers
  criteria.reset();
  return password;
}


function generatePassword() {
  //debugger;
  console.log(criteria.len)
  checkInpLength();

  checkCriteria();

  console.log(criteria.len)
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
