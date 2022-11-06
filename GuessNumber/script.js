const secretNumber = Math.trunc(Math.random() * 100) + 1;
const number = document.querySelector(".number").textContent = secretNumber;
let score = 20;
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector(".message").textContent = "🙃 no number";
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "guessed correct"
    } else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector(".message").textContent = "to high";
            score++;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "you loose the game";
        }

    } else if (guess < secretNumber) {
        document.querySelector(".message").textContent = "to low";
        score--;
        document.querySelector(".score").textContent = score;
    }
})


