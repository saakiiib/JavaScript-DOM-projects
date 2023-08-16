document
  .getElementById("calculate")
  .addEventListener("click", calculateAgeAndNextBirthday);

function calculateAgeAndNextBirthday() {
  const birthdate = new Date(document.getElementById("birthdate").value);
  const today = new Date();
  const currentYear = today.getFullYear();
  const birthYear = birthdate.getFullYear();
  const nextBirthday = new Date(
    birthYear,
    birthdate.getMonth(),
    birthdate.getDate()
  );

  if (nextBirthday < today) {
    nextBirthday.setFullYear(currentYear + 1);
  }

  const age = currentYear - birthYear;
  const daysUntilNextBirthday = Math.round(
    (nextBirthday - today) / (1000 * 60 * 60 * 24)
  );

  const resultElement = document.getElementById("result");
  let result = `Your age is: ${age}<br>`;

  if (daysUntilNextBirthday === 0) {
    result += `Happy Birthday! 🎉 Today is your birthday!`;
  } else {
    result += `Days until your next birthday: ${daysUntilNextBirthday}`;
  }

  resultElement.innerHTML = result;
}
