const eightBall = document.getElementById("eightBall");
const responseBall = document.getElementById("eightBallResponse");

// On click, shake then switch
eightBall.addEventListener("click", () => {
  eightBall.classList.add("shake");

  // Wait for animation duration (adjust to match your CSS)
  setTimeout(() => {
    eightBall.style.display = "none";
    responseBall.style.display = "block";
    showRandomResponses();
  }, 1000); // 1000ms = 1 second
});


// 10 positive answers, 5 negative answers, and 5 neutral answers

const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Reply hazy, try again"
];

function showRandomResponses(){
    const responseText = document.getElementById("responseText");
    const randomIndex = Math.floor(Math.random() * responses.length);
    responseText.textContent = responses[randomIndex];
    responseText.style.display = "block";

    setTimeout(() => {
        responseBall.style.display = "none";
        responseText.style.display = "none";
        eightBall.style.display = "block";
        eightBall.classList.remove("shake");
    }, 4000);

}


