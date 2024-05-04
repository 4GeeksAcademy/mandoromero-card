import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".btn").addEventListener("click", function() {
    generateCard();
  });
};
function generateCard() {
  let suits = ["♠", "♥", "♦", "♣"];
  let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomRank = rank[Math.floor(Math.random() * rank.length)];
  if (randomSuit === "♠" || randomSuit === "♣") {
    document.querySelector(".top").style.color = "black";
    document.querySelector(".bottom").style.color = "black";
    document.querySelector(".rank").style.color = "black";
  } else {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".bottom").style.color = "red";
    document.querySelector(".rank").style.color = "red";
  }
  document.querySelector(".top").innerHTML = randomSuit;
  document.querySelector(".bottom").innerHTML = randomSuit;
  document.querySelector(".rank").innerHTML = randomRank;
}
