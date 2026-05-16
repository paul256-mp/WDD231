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