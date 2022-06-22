const form = document.querySelector(".form");
const fname = document.querySelector(".fname");
const lname = document.querySelector(".lname");
const eaddress = document.querySelector(".eaddress");
const password = document.querySelector(".password");
const btnclaim = document.querySelector(".btn-claim");

const errFname = document.getElementById("fname");
const errLname = document.getElementById("lname");
const errEmail = document.getElementById("eaddress");
const errPassword = document.getElementById("password");

function valFname() {
    if (fname.value === "") {
        errFname.style.display = "block";
        fname.style.backgroundImage = 'url("images/icon-error.svg")';
        fname.style.backgroundRepeat = "no-repeat";
    }
}

function valLname() {
    if (lname.value === "") {
        errLname.style.display = "block";
        lname.style.backgroundImage = 'url("images/icon-error.svg")';
    }
}

function valEmail() {
    if (eaddress.value === "") {
        errEmail.style.display = "block";
        eaddress.style.backgroundImage = 'url("images/icon-error.svg")';
    }
}

function valPassword() {
    if (password.value === "") {
        errPassword.style.display = "block";
        password.style.backgroundImage = 'url("images/icon-error.svg")';
    }
}

function valInput () {
    valFname();
    valLname();
    valEmail();
    valPassword();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    valInput();
});