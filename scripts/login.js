import { navbar } from "./navbar.js";

let nav_div = document.getElementById("navbar");
nav_div.innerHTML = navbar();

let login = document.getElementById("loginw");
login.addEventListener("click", loginid);

async function loginid() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  let obj = {
    username: user,
    password: pass,
  };
  let api = `https://masai-api-mocker.herokuapp.com/auth/login`;
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
  if (res.error == false) {
    // alert("Logged In Successfully");
    let signuptext=document.getElementById("signuptext");
    signuptext.innerText="Logged in Successfully";
    signuptext.style.color="green";
    document.getElementById("login").innerText="Welcome"
    setTimeout(function() {
      window.location.href = "./index.html";
    }, 2000);
  } else {
    // alert("login failed");
    let signuptext=document.getElementById("signuptext");
    signuptext.innerText="Login Failed";
    signuptext.style.color="red";
  }
}
