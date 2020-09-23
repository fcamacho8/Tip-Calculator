var tip = document.getElementById("tip");
var bill = document.getElementById("bill");
var submit = document.getElementById("submit");

function calculateTip(total, tipPercent) {
    var result = (total * tipPercent).toFixed(2);
    return result;
}

function calculateTotal(total, tipAmount) {
    return parseFloat(total) + parseFloat(tipAmount);
  }

function addTip() {
    event.preventDefault();

    var tipPercent = tip.value * .01;
    var total = bill.value
    var tipAmount = calculateTip(total, tipPercent);
    var newTotal = calculateTotal(tipAmount, total);
    document.querySelector("#tip-amount").textContent = "$" + tipAmount;
    document.querySelector("#new-total").textContent ="$" + newTotal.toFixed(2);
}

submit.addEventListener("click", addTip);