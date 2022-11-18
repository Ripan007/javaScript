let second = 0;
let minute = 0;
let hour = 0;

const result = document.querySelector("#result");
setInterval(() => {
    second++;
    result.innerHTML = hour + ":" + minute + ":" + second;
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
}, 1000)