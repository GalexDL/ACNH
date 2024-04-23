function OutputText() {
    const inputText = document.getElementById("input").value;
    const output = document.getElementById("output");
    output.innerHTML = inputText; // Set innerHTML to allow styling
}

// Update output on page load and whenever the input changes
OutputText();
document.getElementById("input").addEventListener("keyup", OutputText);