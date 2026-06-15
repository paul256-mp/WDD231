const url = "data/services.json";
const cards = document.querySelector("#cards");


const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark")
  );
});

if (localStorage.getItem("theme") === "true") {
  document.body.classList.add("dark");
}

const serviceContainer =
  document.querySelector("#serviceContainer");

const modal =
  document.querySelector("#serviceModal");

const modalContent =
  document.querySelector("#modalContent");

const closeModal =
  document.querySelector("#closeModal");

async function loadServices() {

  try {

    const response =
      await fetch("./data/services.json");

    const services =
      await response.json();

    services.forEach(service => {

      const card =
        document.createElement("div");

      card.classList.add("card");

      card.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.type}</p>
            <p>${service.availability}</p>

            <button data-id="${service.id}">
                Details
            </button>
            `;

      serviceContainer.appendChild(card);
    });

    document
      .querySelectorAll(".card button")
      .forEach(button => {

        button.addEventListener("click", () => {

          const selected =
            services.find(
              service =>
                service.id ==
                button.dataset.id
            );

          modalContent.innerHTML = `
                <h2>${selected.name}</h2>
                <p>${selected.description}</p>
                `;

          modal.showModal();

        });

      });

  }
  catch (error) {

    console.error(error);

  }

}

closeModal.addEventListener("click", () => {
  modal.close();
});

loadServices();