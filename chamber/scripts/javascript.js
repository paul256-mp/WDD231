const url = "data/members.json";
const cards = document.querySelector("#cards");

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data);
}

getMembers();

const displayMembers = (members) => {
  cards.innerHTML = "";

  members.forEach((member) => {
    const card = document.createElement("section");

    card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" loading="lazy">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p>${member.industry}</p>
            <p>Membership Level: ${member.membership}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

    cards.appendChild(card);
  });
};

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
  cards.classList.add("grid");
  cards.classList.remove("list");
});

listButton.addEventListener("click", () => {
  cards.classList.add("list");
  cards.classList.remove("grid");
});


// WEATHER

const weather = document.querySelector("#weather");

const apiKey = "YOUR_API_KEY";
const city = "Al Rayyan";

const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

async function getWeather() {
  const response = await fetch(weatherURL);
  const data = await response.json();

  displayWeather(data);
}

const displayWeather = (data) => {
  const currentTemp = data.list[0].main.temp;
  const description = data.list[0].weather[0].description;

  weather.innerHTML = `
    <h2>Weather</h2>

    <p><strong>Current Temperature:</strong> ${currentTemp}°C</p>

    <p><strong>Condition:</strong> ${description}</p>

    <h3>3-Day Forecast</h3>
  `;

  const forecastDays = [8, 16, 24];

  forecastDays.forEach((day) => {
    const forecast = data.list[day];

    const date = new Date(forecast.dt_txt);

    weather.innerHTML += `
      <p>
        ${date.toLocaleDateString("en-US", { weekday: "long" })}:
        ${forecast.main.temp}°C
      </p>
    `;
  });
};

getWeather();


// SPOTLIGHTS

const spotlightCards = document.querySelector("#spotlights");

async function getSpotlights() {
  const response = await fetch(url);
  const data = await response.json();

  displaySpotlights(data);
}

const displaySpotlights = (members) => {
  spotlightCards.innerHTML = "";

  const filteredMembers = members.filter(
    (member) =>
      member.membership === "Gold" ||
      member.membership === "Silver"
  );

  const randomMembers = filteredMembers
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  randomMembers.forEach((member) => {
    const card = document.createElement("section");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}" loading="lazy">

      <h2>${member.name}</h2>

      <p>${member.phone}</p>

      <p>${member.address}</p>

      <p>
        <a href="${member.website}" target="_blank">
          Visit Website
        </a>
      </p>

      <p>Membership Level: ${member.membership}</p>
    `;

    spotlightCards.appendChild(card);
  });
};

getSpotlights();