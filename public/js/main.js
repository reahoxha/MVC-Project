"use strict";
const btn = document.querySelector("button");

btn.addEventListener("click", makeReq);

async function makeReq() {
  const input = document.querySelector("#celebrity").value;
  try {
    const response = await fetch(`/api/${input}`);
    const data = await response.json();

    console.log(data);
    document.querySelector(".full-name").innerText = data.birthName;
    document.querySelector(".birth-date").innerText = data.birthDate;
    document.querySelector(".profile-picture").src = data.image;
  } catch (error) {
    console.log(error);
  }
}
