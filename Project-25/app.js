document.getElementById("generate").addEventListener("click", generatePassword);

function generatePassword() {
  const passwordLength = parseInt(
    document.getElementById("password-length").value
  );
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSpecialChars =
    document.getElementById("special-characters").checked;

  if (
    !includeUppercase &&
    !includeLowercase &&
    !includeNumbers &&
    !includeSpecialChars
  ) {
    alert("Please select at least one character type.");
    return;
  }

  let charPool = "";
  if (includeUppercase) charPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLowercase) charPool += "abcdefghijklmnopqrstuvwxyz";
  if (includeNumbers) charPool += "0123456789";
  if (includeSpecialChars) charPool += '!@#$%^&*()_+{}[]|:;"<>,.?/~';

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool.charAt(randomIndex);
  }

  document.getElementById("password").value = password;
}
