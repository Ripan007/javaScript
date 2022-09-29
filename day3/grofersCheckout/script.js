const priceList = document.querySelectorAll(`[data-ns-test="price"]`);
let total = 0;
for (let i = 0; i < priceList.length; i++) {
  console.log(priceList[i].innerText);
  total += Number(priceList[i].innerText);
}
const table = document.querySelector("table");
const newRow = document.createElement("tr");
const col1 = document.createElement("td");
col1.innerText = "GrandTotal:";
const col2 = document.createElement("td"); //
col2.innerText = total;
col2.setAttribute("data-ns-test", "grandTotal");
newRow.append(col1, col2);
table.append(newRow);
