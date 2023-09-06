const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherDisplay = document.querySelector(".weather");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value;

  if (city.trim() === "") {
    alert("Please enter a city.");
    return;
  }

  fetch(`https://wttr.in/${city}?format=%t+%C+%w+%m+%o+%p`)
    .then((response) => response.text())
    .then((data) => {
      const [temperature, condition, wind, precipitation, ozone, pressure] =
        data.split("+");
      weatherDisplay.innerHTML = `
                <p>Temperature: ${temperature}</p>
                <p>Condition: ${condition}</p>
                <p>Wind: ${wind}</p>
                <p>Precipitation: ${precipitation}</p>
                <p>Ozone: ${ozone}</p>
                <p>Pressure: ${pressure}</p>
            `;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("An error occurred while fetching weather data.");
    });
});
