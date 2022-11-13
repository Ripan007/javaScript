// $(document).ready(function () {
//     $('button').click(function () {
//         alert('learning jqery')
//     })
// })


// function myFunction() {
//     let x = document.querySelector("#myDiv");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

$(document).ready(function () {
    $('button').click(function () {
        $('#myDiv').toggle(1000)
    })
})