import navbar from "./navbar.js";

document.getElementById("navbar").innerHTML = navbar();

//============code for login===============================
let login = document.getElementById("lgn");
login.addEventListener("click", loginuser);

async function loginuser() {
  console.log("clicked");
  let email = document.getElementById("logemail").value;
  let password = document.getElementById("logpassword").value;

  let obj = {
    email: email,
    password: password,
  };
  //   console.log(obj);
  let api = "http://localhost:1050/users/login";
  let data = await fetch(api, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let res = await data.json();
  console.log(res);
  console.log("hi");
  if (res.token) {
    localStorage.setItem("usertoken", res.token);
    alert(res.message);
    setTimeout(function () {
      window.location.href = "./homepage.html";
    }, 2000);
  } else {
    alert(res.message);
  }
}
//===============code for register====================================
let register = document.getElementById("rgst");
register.addEventListener("click", registeruser);

async function registeruser() {
  console.log("clicked");
  let name = document.getElementById("regname").value;
  let email = document.getElementById("regemail").value;
  let password = document.getElementById("regpassword").value;

  let obj = {
    name: name,
    email: email,
    password: password,
  };

  console.log(obj);
  let api = "http://localhost:1050/users/register";
  let data = await fetch(api, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let res = await data.json();
  console.log(res);
  console.log("hi");
  alert(res.message);
  setTimeout(function () {
    window.location.href = "./user_login_signup.html";
  }, 2000);
}
