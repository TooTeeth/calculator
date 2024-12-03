function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  let result;

  if (operation === "add") {
    result = num1 + num2;
  } else if (operation === "subtract") {
    result = num1 - num2;
  } else if (operation === "multiply") {
    result = num1 * num2;
  } else if (operation === "divide") {
    if (num2 === 0) {
      alert("Error");
      return;
    }
    result = parseFloat(num1 / num2);
  } else {
    result = "Invaild operation!";
  }
  document.getElementById("result").textContent = "Result: " + result;
}
