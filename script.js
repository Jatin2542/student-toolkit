// Dark Mode
function toggleMode() {
    document.body.classList.toggle("dark");
}

// Notes Save
function saveNote() {
    let note = document.getElementById("note").value;
    localStorage.setItem("note", note);
}

// Load Note
window.onload = function () {
    document.getElementById("note").value = localStorage.getItem("note") || "";
}

// Resume Preview
function updateResume() {
    let name = document.getElementById("name").value;
    document.getElementById("previewName").innerText = name;
}

// Calculator
function calculate() {
    let input = document.getElementById("calcInput").value;
    try {
        document.getElementById("result").innerText = eval(input);
    } catch {
        document.getElementById("result").innerText = "Error";
    }
}