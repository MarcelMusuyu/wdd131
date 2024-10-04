const last = document.querySelector("#last");
// use the date object
const today = new Date();

const lastModified = document.lastModified;
const formattedDateTime = new Date(lastModified).toLocaleString();

last.innerHTML = `Last modification ${formattedDateTime}`;

const year = document.querySelector("#currentyear");
year.innerHTML = `${today.getFullYear()}`;

function calculateWindChill(temperature, windSpeed) {
  // Assuming temperature is in Celsius
  if (temperature <= 10 && windSpeed > 4.8) {
    return (
      13.12 +
      0.6215 * temperature -
      11.37 * Math.pow(windSpeed, 0.16) +
      0.3965 * temperature * Math.pow(windSpeed, 0.16)
    );
  } else {
    return "N/A";
  }
}

// Replace these with the static values from your weather section
const temperature = 10; // Celsius
const windSpeed = 5; // km/h

const windChill = calculateWindChill(temperature, windSpeed);

// Display the windchill factor in your weather section
document.getElementById("windchill").textContent = `${windChill.toFixed(1)} °C`;

document.getElementById("temperature").textContent = `${temperature} °C`;

document.getElementById("wind").textContent = `${windSpeed} km/h`;
