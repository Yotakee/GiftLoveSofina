const btn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");

btn.addEventListener("click", () => {
  envelope.style.display = "block";
  setTimeout(() => {
    envelope.classList.add("open");
  }, 200);

  launchConfetti();
});

function launchConfetti() {
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "absolute";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.background = randomPink();
    confetti.style.top = "-10px";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.borderRadius = "50%";
    confetti.style.transition = "5s linear";
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.style.top = window.innerHeight + "px";
      confetti.style.transform = "rotate(720deg)";
    }, 10);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

function randomPink() {
  const colors = ["#ff66b3","#ff99cc","#ff4da6","#ff85c1","#ffc0cb"];
  return colors[Math.floor(Math.random() * colors.length)];
}
