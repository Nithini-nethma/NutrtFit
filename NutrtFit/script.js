//search bar
let search = document.querySelector('.search-box')

document.querySelector('#search-icon').onclick =()=>{
    search.classList.toggle('active')
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = ()=>{
    navbar.classList.toggle('active');
}
//BMI calculater
function toggleUnits() {
    const unit = document.getElementById("units").value;
    const weightLabel = document.getElementById("weight-unit");
    const heightLabel = document.getElementById("height-unit");

    if (unit === "metric") {
        weightLabel.textContent = "kg";
        heightLabel.textContent = "cm";
    } else {
        weightLabel.textContent = "lbs";
        heightLabel.textContent = "inches";
    }
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const unit = document.getElementById("units").value;

    // Ensure valid inputs
    if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0) {
        alert("Please enter valid weight, height, and age.");
        return;
    }

    let bmi;

    if (unit === "metric") {
        bmi = weight / ((height / 100) ** 2); // Metric (kg, cm)
    } else {
        bmi = (weight / (height ** 2)) * 703; // Imperial (lbs, inches)
    }

    bmi = bmi.toFixed(2); // Rounds the BMI to 2 decimal places

    let category = '';
    let healthRisk = '';
    let color = ''; // Variable to store the color for the category

    // BMI classification based on standard categories
    if (bmi < 18.5) {
        category = "Underweight";
        healthRisk = "Low (but increased risk of other problems)";
        color = "blue"; // Color for Underweight
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
        healthRisk = "Low";
        color = "green"; // Color for Normal weight
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
        healthRisk = "Increased";
        color = "yellow"; // Color for Overweight
    } else if (bmi >= 30 && bmi < 35) {
        category = "Obesity Class I";
        healthRisk = "High";
        color = "orange"; // Color for Obesity Class I
    } else if (bmi >= 35 && bmi < 40) {
        category = "Obesity Class II";
        healthRisk = "Very High";
        color = "orangered"; // Color for Obesity Class II
    } else {
        category = "Obesity Class III";
        healthRisk = "Extremely High";
        color = "red"; // Color for Obesity Class III
    }

    // Adjust health risk based on gender and age
    if (gender === "male") {
        if (age < 20) {
            healthRisk += " (Note: Age < 20. BMI may not be a reliable measure for youth.)";
        } else if (age >= 45) {
            healthRisk += " (Note: Increased age may affect health risk. Please consult a doctor.)";
        }
    } else if (gender === "female") {
        if (age < 20) {
            healthRisk += " (Note: Age < 20. BMI may not be a reliable measure for youth.)";
        } else if (age >= 50) {
            healthRisk += " (Note: Increased age may affect health risk. Please consult a doctor.)";
        }
    }

    // Display the results
    document.getElementById("bmi-result").textContent = `Your BMI: ${bmi}`;
    document.getElementById("bmi-category").textContent = `Category: ${category}`;
    document.getElementById("bmi-category").style.color = color; // Set the category color
    document.getElementById("health-risk").textContent = `Health Risk: ${healthRisk}`;
}

// Clear button functionality
function clearForm() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "male"; // Reset to default gender
    document.getElementById("units").value = "metric"; // Reset to default units
    toggleUnits(); // Reset the unit labels to default

    // Clear the result texts
    document.getElementById("bmi-result").textContent = "Your BMI: --";
    document.getElementById("bmi-category").textContent = "Category: --";
    document.getElementById("bmi-category").style.color = "#333"; // Reset color to default
    document.getElementById("health-risk").textContent = "Health Risk: --";
}


