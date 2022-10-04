let bb = document.querySelector("#beratBadan");
let tb = document.querySelector("#tinggiBadan");
let btn = document.getElementById("button1");
let frm = document.getElementById("form1");
let result = document.getElementById("result");
let xResult = document.getElementById("textResult");
// event pada button
btn.addEventListener("click", (event) => {
  event.preventDefault();

  // prevent refresh page
  let cal = tb.value / 100;
  let calc = Math.pow(cal, 2);
  let bmi = bb.value / calc;
  // rumus dan kalkulasi bmi

  // const content = element.innerHTML;
  //kondisional hasil kalkulasi bmi
  if (bmi < 18.5) {
    xResult.innerHTML = "Nilai BMI Anda sebesar " + bmi.toFixed(1) + " termasuk kategori Underweight";
    xResult.style.display = "flex";
    xResult.style.border = "2px solid red";
    result.style.display = "grid";
  } else if (bmi > 18.5 && bmi < 24.9) {
    xResult.innerHTML = "Nilai BMI Anda sebesar " + bmi.toFixed(1) + " termasuk kategori Normal Weight";
    xResult.style.display = "flex";
    xResult.style.border = "2px solid green";
    result.style.display = "grid";
  } else if (bmi > 25 && bmi < 29.9) {
    xResult.innerHTML = "Nilai BMI Anda sebesar " + bmi.toFixed(1) + " termasuk kategori Overweight";
    xResult.style.display = "flex";
    xResult.style.border = "2px solid red";
    result.style.display = "grid";
  } else if (bmi > 30) {
    xResult.innerHTML = "Nilai BMI Anda sebesar " + bmi.toFixed(1) + " termasuk kategori Obesity";
    xResult.style.display = "flex";
    xResult.style.border = "2px solid #610301";
    result.style.display = "grid";
  }
  // kondisional input
  if (tb.value && bb.value <= 0) {
    xResult.innerHTML = "input tinggi dan berat badan invalid";
    xResult.style.display = "flex";
    xResult.style.border = "2px solid red";
    result.style.display = "grid";
  } else if (tb.value && bb.value >= 300) {
    xResult.innerHTML = "input tinggi dan berat badan invalid";
    xResult.style.display = "flex";
    xResult.style.border = "2px solid red";
    result.style.display = "grid";
  }
  //reset form
  frm.reset();
});
