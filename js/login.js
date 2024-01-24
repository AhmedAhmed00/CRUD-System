var loginBtn = document.querySelector(".form-btn");
var emailLogin = document.querySelector(".emailLogin");
var passLogin = document.querySelector(".passLogin");
var icons = document.querySelectorAll(".show-hide-pass");
var passFields = document.querySelectorAll(".password");
var displayErorr = document.querySelector(".error-msg-container");
var handleErrorLogin = document.querySelector(".handle-login-err");
var users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

loginBtn.addEventListener("click", login);

function login() {
  if (requierments()) {
    var x = emailLogin.value;
    var y = passLogin.value;
    var bool = "";
    for (var i = 0; i < users.length; i++) {
      if (users[i].email === x && users[i].password === y) {
        localStorage.setItem("name", users[i].firstName);
        location.replace("crud.html");
        bool = true;
      }
    }
    if (bool != true) {
      error("incorrect email or pass");
    }
  } else {
    error("empty data");
  }
}

function error(x) {
  handleErrorLogin.innerHTML = x;
  displayErorr.classList.replace("none", "block");
}

function requierments() {
  if (emailLogin.value !== "" || passLogin.value !== "") {
    return true;
  } else {
    return false;
  }
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
