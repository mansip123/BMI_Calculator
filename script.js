function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value) / 100;
  const weight = parseFloat(document.getElementById("weight").value);

  if (!height || !weight) {
    alert("Please enter valid height and weight");
    return;
  }

  const bmi = weight / (height * height);
  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi >= 18.5 && bmi < 24.9) category = "Normal weight";
  else if (bmi >= 25 && bmi < 29.9) category = "Overweight";
  else category = "Obese";

  document.getElementById("result").innerText =
    `Your BMI is ${bmi.toFixed(2)} (${category})`;
}
