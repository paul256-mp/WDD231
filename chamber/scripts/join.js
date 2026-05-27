const timestamp = document.getElementById("timestamp");

timestamp.value = new Date().toISOString();


// Open modal buttons
const openButtons = document.querySelectorAll(".open-modal");

openButtons.forEach(button => {

  button.addEventListener("click", () => {

    const modalId = button.dataset.modal;

    document.getElementById(modalId).showModal();

  });

});


// Close modal buttons
const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach(button => {

  button.addEventListener("click", () => {

    button.closest("dialog").close();

  });

});