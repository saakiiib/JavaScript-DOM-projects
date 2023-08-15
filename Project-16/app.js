function updateOutput() {
  const inputElement = document.getElementById("textInput");
  const outputContainer = document.getElementById("outputContainer");
  const inputValue = inputElement.value;
  let currentLine = "";
  let formattedOutput = "";

  for (let charIndex = 0; charIndex < inputValue.length; charIndex++) {
    const currentChar = inputValue[charIndex];
    if (currentChar !== ",") {
      currentLine += currentChar;
    } else {
      formattedOutput += currentLine + "<br>";
      currentLine = "";
    }
  }

  formattedOutput += currentLine;
  outputContainer.innerHTML = formattedOutput;
}
