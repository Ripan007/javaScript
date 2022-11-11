let data = [10, 20, 30, 40, 50, 60];
/*
for (let i = 0; i < data.length; i++) {
    // document.write(data[i])
    // document.write(`Array ${i} is ${data[i]} <br/>`)

} */

// let x = 1;
// document.write(data[4])
// document.write(data[x])

function getElement() {
    // let el = document.querySelector("#element").value;
    // alert(data[el])

    let el = document.querySelector("#element");
    if (el < data.length) {
        alert(data[el])
    } else {
        alert('enter valid number')
    }

}