let btn = document.querySelector("#mybtn");
btn.addEventListener("click", function () {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  let sum = Number(num1) + Number(num2);
  document.getElementById("result").value = sum;
});
