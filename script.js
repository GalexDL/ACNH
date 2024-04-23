//Input to Paragraph
function OutputText() {
    const inputText = document.getElementById("input").value;
    const output = document.getElementById("output");
    output.innerHTML = inputText;
}
// Update Output
OutputText();
document.getElementById("input").addEventListener("keyup", OutputText);

///////////////////////////////////////////////////////////////////////

//Input to Name
function OutputNText() {
    const inputText = document.getElementById("inputN").value;
    const output = document.getElementById("outputN");
    output.innerHTML = inputText;
}
// Update Output
OutputNText();
document.getElementById("input").addEventListener("keyup", OutputNText);