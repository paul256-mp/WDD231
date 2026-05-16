[
  {
    "name": "Doha Tech Solutions",
    "address": "West Bay, Doha, Qatar",
    "phone": "+974 4455 1122",
    "website": "https://www.dohatech.com",
    "image": "dohatech.webp",
    "membership": 3,
    "description": "Technology and software development company."
  },

  {
    "name": "Qatar Fresh Market",
    "address": "Al Sadd, Doha, Qatar",
    "phone": "+974 4433 7788",
    "website": "https://www.qatarfresh.com",
    "image": "freshmarket.webp",
    "membership": 2,
    "description": "Local grocery and fresh food supplier."
  },

  {
    "name": "Pearl Fitness Center",
    "address": "The Pearl, Doha, Qatar",
    "phone": "+974 4466 9900",
    "website": "https://www.pearlfitness.com",
    "image": "fitness.webp",
    "membership": 1,
    "description": "Modern fitness and wellness center."
  },

  {
    "name": "Desert Travel Agency",
    "address": "Lusail, Doha, Qatar",
    "phone": "+974 4411 2233",
    "website": "https://www.deserttravel.com",
    "image": "travel.webp",
    "membership": 2,
    "description": "Travel and tourism services."
  },

  {
    "name": "Elite Construction",
    "address": "Industrial Area, Doha, Qatar",
    "phone": "+974 4488 7766",
    "website": "https://www.eliteconstruction.com",
    "image": "construction.webp",
    "membership": 3,
    "description": "Commercial and residential construction company."
  },

  {
    "name": "Blue Ocean Café",
    "address": "Corniche Road, Doha, Qatar",
    "phone": "+974 4400 2211",
    "website": "https://www.blueoceancafe.com",
    "image": "cafe.webp",
    "membership": 1,
    "description": "Coffee shop and restaurant."
  },

  {
    "name": "Smart Education Center",
    "address": "Al Wakrah, Qatar",
    "phone": "+974 4477 6655",
    "website": "https://www.smarteducation.com",
    "image": "education.webp",
    "membership": 2,
    "description": "Educational training and tutoring center."
  }
]


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