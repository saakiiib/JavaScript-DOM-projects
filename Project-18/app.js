//Author: Nazmus Sakib
const nameInput = document.getElementById("nameInput");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");

submitBtn.addEventListener("click", () => {
  const name = nameInput.value;
  if (name) {
    message.textContent = `Hello ${name}, welcome to our application`;
  }
});

resetBtn.addEventListener("click", () => {
  nameInput.value = "";
  message.textContent = "";
});
