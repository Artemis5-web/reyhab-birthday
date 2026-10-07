/* =========================================
   REYHAB BIRTHDAY WEBSITE
========================================= */

let currentPage = 0;
const pages = document.querySelectorAll(".page");

/* =========================================
   PAGE NAVIGATION
========================================= */

function nextPage() {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.remove("active");
    currentPage++;
    pages[currentPage].classList.add("active");

    createSparkles(10);
  }
}

/* =========================================
   CASH RAIN 💸
========================================= */

const cashEmojis = ["💵", "💰", "💸", "🪙"];

function createCash(amount = 40) {
  const container = document.getElementById("cash-container");

  for (let i = 0; i < amount; i++) {
    const bill = document.createElement("div");
    bill.classList.add("cash");
    bill.innerHTML = cashEmojis[Math.floor(Math.random() * cashEmojis.length)];

    bill.style.left = Math.random() * 100 + "%";
    bill.style.animationDuration = 2.5 + Math.random() * 3 + "s";
    bill.style.animationDelay = Math.random() * 1.2 + "s";
    bill.style.fontSize = 20 + Math.random() * 16 + "px";

    container.appendChild(bill);

    setTimeout(() => bill.remove(), 6500);
  }
}

/* =========================================
   SPARKLES (anime shimmer) ✨
========================================= */

function createSparkles(amount = 10) {
  const container = document.getElementById("sparkle-container");
  const symbols = ["✨", "⭐", "💫"];

  for (let i = 0; i < amount; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.animationDuration = 4 + Math.random() * 3 + "s";
    sparkle.style.animationDelay = Math.random() * 1.5 + "s";
    sparkle.style.fontSize = 14 + Math.random() * 16 + "px";

    container.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 7500);
  }
}

/* =========================================
   FINAL CELEBRATION — MAKE IT RAIN
========================================= */

function celebrate() {
  createCash(80);
  createSparkles(30);

  const button = document.querySelector(".birthday-button");
  button.innerHTML = "🎉 HAPPY BIRTHDAY REYHAB!!! 🎉";

  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100, 50, 200]);
  }
}

/* =========================================
   AMBIENT EFFECTS
========================================= */

setInterval(() => createSparkles(2), 2200);
setTimeout(() => createSparkles(15), 800);
