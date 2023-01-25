import navbar from "./navbar.js";

document.getElementById("navbar").innerHTML = navbar();

//============code for login===============================
let login = document.getElementById("lgn");
login.addEventListener("click", loginadmin);

async function loginadmin() {
  console.log("clicked");
  let email = document.getElementById("logemail").value;
  let password = document.getElementById("logpassword").value;

  let obj = {
    email: email,
    password: password,
  };
  //   console.log(obj);
  let api = "https://long-goat-raincoat.cyclic.app/admins/login";
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
    localStorage.setItem("admintoken", res.token);
    alert(res.message);
    setTimeout(function () {
      window.location.href = "./admin_page.html";
    }, 2000);
  } else {
    alert(res.message);
  }
}
//===============code for register====================================
let register = document.getElementById("rgst");
register.addEventListener("click", registeradmin);

async function registeradmin() {
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
  let api = "https://long-goat-raincoat.cyclic.app/admins/register";
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
    window.location.href = "./admin_login_signup.html";
  }, 2000);
}
