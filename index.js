"use strict";

const addFriend = document.getElementById("add");
const isStatus = document.querySelector("h5");
let flag = 0;

addFriend.addEventListener("click", function () {
  if (flag == 0) {
    isStatus.textContent = "Friend";
    isStatus.style.color = "Green";
    flag = 1;
    addFriend.textContent = "Remove Friend";
  } else {
    isStatus.textContent = "Stranger";
    isStatus.style.color = "red";
    flag = 0;
    addFriend.textContent = "Add Friend";
  }
});
