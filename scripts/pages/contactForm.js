function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    urmsgInput.value ="";
}
//DOM ELEMENTS
const submitButton = document.querySelector(".btn-submit");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnClose = document.querySelector(".close");
const modal = document.querySelector(".modal");


const firstNameInput = document.getElementById("first")
const firstNameError = document.querySelector(".firstNameError")

const lastNameInput = document.getElementById("last")
const lastNameError = document.querySelector(".lastNameError")

const emailInput = document.getElementById("email")
const emailError = document.querySelector(".emailNameError")

const urmsgInput = document.getElementById("urmsg")
const urmsgError = document.querySelector(".urmsgError")

  submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      modal.style.display ="none";
  });

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


function launchModal() {
    modalbg.style.display = "block";
    modal.style.display = "block";
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    urmsgInput.value ="";
  }

  