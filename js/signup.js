var fnameInput = document.querySelector(".fname");
var snameInput = document.querySelector(".sname");
var emailInput = document.querySelector(".email");
var passInput = document.querySelector(".pass");
var button = document.querySelector(".form-btn");
var handleErrorSignup = document.querySelector(".handle-error-signup");
var icons = document.querySelectorAll(".show-hide-pass");
var passFields = document.querySelectorAll(".password");
var displayErorr = document.querySelector(".error-msg-container");
var users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

icons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    passFields.forEach((passFields) => {
      if (passFields.type === "password") {
        passFields.type = "text";
        icons.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        icons.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
        passFields.type = "password";
      }
    });
  });
});

button.addEventListener("click", signUp);
function signUp() {
  var user = {
    firstName: fnameInput.value,
    secondName: snameInput.value,
    email: emailInput.value,
    password: passInput.value,
  };

  for (var i = 0; i < users.length; i++) {}

  if (validation() && !isExit()) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    console.log("ok");
    validData();
  }
}

function validation() {
  var regexFirstName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  var regexSecondName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  var regexEmail = /^\S+@\S+\.\S+$/;
  var regexPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (
    regexFirstName.test(fnameInput.value) &&
    regexSecondName.test(snameInput.value) &&
    regexEmail.test(emailInput.value) &&
    regexPass.test(passInput.value)
  ) {
    return true;
  } else if (
    regexFirstName.test(fnameInput.value) &&
    regexSecondName.test(snameInput.value) &&
    regexEmail.test(emailInput.value) &&
    regexPass.test(passInput.value) != true
  ) {
    handlePass();
  } else {
    handleRegex();
    return false;
  }
}

function validData() {
  displayErorr.classList.replace("none", "block");
  handleErrorSignup.innerHTML = "done";
}

function handleEmail() {
  displayErorr.classList.replace("none", "block");
  handleErrorSignup.innerHTML = "email already exit";
}

function handleRegex() {
  displayErorr.classList.replace("none", "block");
  handleErrorSignup.innerHTML = "incorrect inputs";
}
function handlePass() {
  displayErorr.classList.replace("none", "block");
  handleErrorSignup.innerHTML = `password must at list 8 numbers and sympols`;
}

function isExit() {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email == emailInput.value) {
      handleEmail();
      return true;
    }
  }
}
