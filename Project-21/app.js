document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login-button");
  const loginForm = document.getElementById("login-form");

  loginButton.addEventListener("mouseover", function () {
    const maxX = loginForm.offsetWidth - loginButton.offsetWidth;
    const maxY = loginForm.offsetHeight - loginButton.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    loginButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });

  loginButton.addEventListener("click", function () {
    loginButton.style.transform = "translate(0, 0)";
  });
});
