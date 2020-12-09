// SignUP js

let names = [];
let emails = [];
let passwords = [];

function signUp() {
  // getting data from inputs
  names.push(document.getElementById("name").value);
  emails.push(document.getElementById("email").value);
  passwords.push(document.getElementById("password").value);

  // setting data to local storage

  localStorage.setItem("names", JSON.stringify(names));
  localStorage.setItem("emails", emails);
  localStorage.setItem("passwords", passwords);

  alert("Account created successfully");

  window.location.href = "./login.html";
  return false;
}

// LOGIN JS

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // for(let  =0; i<)
  if (
    email === localStorage.getItem("emails") &&
    password === localStorage.getItem("passwords")
  ) {
    alert("login success");
    window.location.href = "./welcome.html";
  } else {
    alert("password or email is incorrect");
  }

  return false;
}

// Welcome page

document.getElementById("userName").innerHTML = `<h1>Name:${JSON.parse(
  localStorage.getItem("names")
)}</h1>`;
document.getElementById(
  "userEmail"
).innerHTML = `<h1>Email:${localStorage.getItem("emails")}</h1>`;

// logout
function logOut() {
  window.location.href = "./login.html";
}
