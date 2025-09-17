// ===== Part 2: Functions with Parameters & Return Values =====

// Global variable
let userName = "Guest";

// Function with parameter & return value
function showMessage(name) {
    userName = name; // Local variable shadowed by parameter
    let message = `Welcome, ${name}!`; // Local scope
    document.getElementById("message").innerText = message;
    return message; // Return value
}

// Reusable function to calculate area of a square
function calculateArea(sideLength) {
    return sideLength * sideLength; // Simple logic with return value
}

console.log("Area of square with side 5:", calculateArea(5));


// ===== Part 3: Combining CSS & JS =====

// Get the box and button
const jsBox = document.getElementById("js-box");
const animateBtn = document.getElementById("animate-btn");

// Toggle animation on button click
animateBtn.addEventListener("click", function() {
    jsBox.classList.toggle("animate"); // Add/Remove CSS class to trigger transition
});
