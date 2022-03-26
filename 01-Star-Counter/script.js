"use strict";
let starFall = 0;
let incrementBtn = document.getElementById("increment-btn");
let countEl = document.getElementById("count-el");

let saveBtn = document.querySelector("#save-btn");
let saveEl = document.querySelector("#save-el");

let resetBtn = document.getElementById("reset-btn");

incrementBtn.addEventListener("click", function () {
  starFall += 1;
  countEl.textContent = starFall;
});

saveBtn.addEventListener("click", function () {
  let fallStr = saveEl.textContent + " " + starFall + " - ";
  saveEl.textContent = fallStr;
  starFall = 0;
  countEl.textContent = 0;
});

resetBtn.addEventListener("click", function () {
  starFall = 0;
  countEl.textContent = 0;
  saveEl.textContent = "Previous falls :";
});
