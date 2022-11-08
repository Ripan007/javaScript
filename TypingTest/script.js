const setOfWords = ["dsa is must for getting  into manng",
    "java is awesome",
    "javascript is cool"]

const msg = document.querySelector("#msg");
const typeWords = document.querySelector("#myWords");
const btn = document.querySelector("#btn");
let startTime, endTime;

playGame = () => {
    let randomNumber =
        Math.floor(Math.random() * setOfWords.length);
    msg.innerText = setOfWords[randomNumber]

}

b̥tn.addEventListener("click", function () {
    console.log(this);
    if (this.innerText == 'Start') {
        typeWords.disabled = false;
        playGame();
    }
})


