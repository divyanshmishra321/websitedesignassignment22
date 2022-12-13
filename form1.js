function clearErrors() {
  errors = document.getElementsByClassName("formerror");
  for (let item of errors) {
    item.innerHTML = "";
  }
}
function seterror(id, error) {
  //sets error inside tag of id
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
  var returnval = true;
  clearErrors();

  //perform validation and if validation fails, set the value of returnval to false
  var name = document.forms["myForm"]["fname"].value;
  if (name.length < 5) {
    seterror("name", "*Length of name is too short");
    returnval = false;
  }

  if (name.length == 0) {
    seterror("name", "*Length of name cannot be zero!");
    returnval = false;
  }

  var ageofper = document.forms["myForm"]["fage"].value;
  if (ageofper.length > 2) {
    seterror("age", "*Input your correct Age");
    returnval = false;
  }

  if (ageofper.length == 0) {
    seterror("age", "Age cannot be empty");
    returnval = false;
  }

  var addofper = document.forms["myForm"]["fadd"].value;
  if (addofper.length < 5) {
    seterror("address", "*Length of address is too short");
    returnval = false;
  }
  if (addofper.length == 0) {
    seterror("address", "*Length of address cannot be empty");
    returnval = false;
  }
  var fsinger = document.forms["myForm"]["fsing"].value;
  if (fsinger.length == 0) {
    seterror("singer", "*Cannot be empty");
    returnval = false;
  }
  var fmovie = document.forms["myForm"]["fmov"].value;
  if (fmovie.length == 0) {
    seterror("movie", "*Cannot be empty");
    returnval = false;
  }
  var fsubject = document.forms["myForm"]["fsub"].value;
  if (fsubject.length == 0) {
    seterror("subject", "*Cannot be empty");
    returnval = false;
  }
  var password = document.forms["myForm"]["fpass"].value;
  if (password.length < 6) {
    seterror("pass", "*Password should be atleast 6 characters long!");
    returnval = false;
  }

  return returnval;
}


function alerton() {
  if (validateForm() == false) {
    alert("check once again");
  }
  else{
    alert("Submit Now")
  }
}
