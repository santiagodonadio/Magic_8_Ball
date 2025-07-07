const eightBall = document.getElementById("eightBall");
const responseBall = document.getElementById("eightBallResponse");

// On click, shake then switch
eightBall.addEventListener("click", () => {
  eightBall.classList.add("shake");

  // Wait for animation duration (adjust to match your CSS)
  setTimeout(() => {
    eightBall.style.display = "none";
    responseBall.style.display = "block";
  }, 1000); // 1000ms = 1 second
});


