

const url = "data/members.json";
const cards = document.querySelector("#members");

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data);
}


const displayMembers = (members) => {
  members.forEach((member) => {

    const card = document.createElement("section");
    const name = document.createElement("h2");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    const website = document.createElement("a");
    const image = document.createElement("img");

    name.textContent = member.name;
    address.textContent = member.address;
    phone.textContent = member.phone;

    website.textContent = member.website;
    website.href = member.website;
    website.target = "_blank";

    image.setAttribute("src", `images/${member.image}`);
    image.setAttribute("alt", member.name);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "300");

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    cards.appendChild(card);
  });
};

getMembers();

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

// footer.js

const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();

lastModified.textContent = `Last Modified: ${document.lastModified}`;