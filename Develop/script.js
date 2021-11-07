// Assignment code here

//use class to hold values of selected modifiers
var criteria = {
  len: 0,
  upper: false,
  number: false,
  specialChar: false,
  parameters: "",
  //reset funtion to set all values to a default
  reset: function() {
    this.len = 0,
    this.upper = false,
    this.number = false,
    this.specialChar = false
    this.parameters = ""
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
  while(criteria.upper === false && criteria.number ===false  && criteria.specialChar === false) {
    criteria.upper =  window.confirm("Would you like to include Upper case letters?")
    criteria.number =  window.confirm("Would you like to include numbers?")
    criteria.specialChar = window.confirm("Would you like to include special characters?")
    
    if (criteria.upper === false && criteria.number === false  && criteria.specialChar === false) {
      window.alert("Please select at least one modifier.");
    }
    else {
      break;
    }
  }

  var parameterlower = "abcdefghijklmnopqrstuvwxyz";
  var parameterCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var parameterNum = "0123456789";
  var parameterSpec = "!@#$%^&*()_+-=";
  //default parameter to lower case alphabet
  criteria.parameters= parameterlower;

  //check for possible combinations of password modifiers and apply selections to parameter
  if (criteria.upper) {
    criteria.parameters = criteria.parameters + parameterCap;
  }
  if (criteria.number) {
    criteria.parameters = criteria.parameters + parameterNum;
  }
  if (criteria.specialChar) {
    criteria.parameters = criteria.parameters + parameterSpec;
  }
}

function randomize () {
  var password = "";
  //loop through criteria.len using Math.random and appropriate parameter to create a password
  for (i = 0; i < criteria.len; i++ ){
    var newPass = Math.floor(Math.random() * (criteria.parameters.length + 1));
    password = password + criteria.parameters.charAt(newPass);
    console.log(newPass);
  }
  //reset modifiers
  criteria.reset();
  return password;
}


function generatePassword() {
  checkInpLength();
  checkCriteria();
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
