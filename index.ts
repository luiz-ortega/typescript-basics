const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;
const button = document.getElementById("button")!;

function sum(a: string, b: string) {
  return Number(a) + Number(b);
}

button.addEventListener("click", function () {
  console.log(sum(input1.value, input2.value));
});
