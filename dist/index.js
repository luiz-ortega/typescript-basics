"use strict";
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var button = document.getElementById("button");
function sum(a, b) {
    return Number(a) + Number(b);
}
button.addEventListener("click", function () {
    console.log(sum(input1.value, input2.value));
});
