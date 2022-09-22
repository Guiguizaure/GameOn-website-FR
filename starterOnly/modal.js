function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const confirmationModal = document.querySelector(".confirmation-modal");
const confirmationBtn = document.querySelector(".btn-fermer");
const closeBtn = document.querySelectorAll(".close");
const submitBtn = document.querySelector(".btn-submit");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Activate CloseBtn
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal() {
  modalbg.style.display = "none";
  confirmationModal.style.display = "none"
}




// DECLARATION des variables que l'on va utiliser pour savoir si les conditions sont bien rempli
let resultFirstName = false;
let resultLastName = false;
let resultEmail = false;
let resultBirthdate = false;
let resultQuantity = false;
let resultLocation = false;
let resultCheckbox = false;

// CREATION de toute les fonctions qui vont nous permettre de vérifier si les informations
// rentré par l'utilisateur sont valide



/* -------------------FIRST NAME------------------ */

const verifFirstName = function(firstName){

  const errorMessage = firstName.nextElementSibling;

  if(firstName.value === "" || firstName.value.lenght < 2){

    errorMessage.style.display = "inline-block";
    return resultFirstName = false;
  }

  errorMessage.style.display = "none";
  return resultFirstName = true;
}

/* -----------------LAST NAME-------------------- */

const verifLastName = function(lastName){

  const errorMessage = lastName.nextElementSibling;

  if(lastName.value === "" || lastName.value.lenght < 2){

    errorMessage.style.display = "inline-block";
    return resultLastName = false;
  }

  errorMessage.style.display = "none";
  return resultLastName = true;
}

/* ----------------------EMAIL----------------------- */

const verifEmail = function(email){

  const errorMessage = email.nextElementSibling;
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(emailRegex.test(email.value)){

    errorMessage.style.display = "none";
    return resultEmail = true;
  }

    errorMessage.style.display = "inline-block";
    return resultEmail = false;
}

/* ------------------------BIRTHDATE---------------------- */

const verifBirthdate = function(birthdate){

  const birthdateValue = document.querySelector('#birthdate').value;
  const dateFormat = new Date(birthdateValue);
  const dateYear = dateFormat.getFullYear();
  const errorMessage = birthdate.nextElementSibling;
  let dateRegex = /^\d{4}-\d\d-\d\d$/;
  
  if(!(dateRegex.exec(birthdate.value))){

    errorMessage.style.display = "inline-block";
    return resultBirthdate = false;

  } else if (dateYear < 1920 || dateYear > 2019){

      errorMessage.style.display = "inline-block";
      return resultBirthdate = false;

  } else {

    errorMessage.style.display = "none";
    return resultBirthdate = true;
  }
};

/* -----------------------QUANTITY----------------------- */

const verifQuantity = function(quantity){

  const errorMessage = quantity.nextElementSibling;

  if(quantity.value === ""){

    errorMessage.style.display = "inline-block";
    return resultQuantity = false;
  }

  errorMessage.style.display = "none";
  return resultQuantity = true;
};

/* -----------------------RADIO BUTTONS---------------------- */

const verifRadio = function(){

  const errorMessage = document.querySelector('.error-message-radio');

  if(document.querySelector('input[name="location"]:checked')){
    errorMessage.style.display = "none";
    return resultLocation = true;
  }
    errorMessage.style.display = "inline-block";
    return resultLocation = false;
  
};

/* -----------------------CHECKBOXES--------------------- */

const verifCheckbox = function(){

  const errorMessage = document.querySelector('.error-message-checkbox');
  const checkbox1 = document.querySelector("#checkbox1");

  if(checkbox1.checked){

    errorMessage.style.display = "none";
    return resultCheckbox = true;
  }
    errorMessage.style.display = "inline-block";
    return resultCheckbox = false;
};


// VALIDATION SUBMIT

    // launch  event
submitBtn.addEventListener("click", launchConfirmationModal);
    // launch confirmation modal 
function launchConfirmationModal(e) {

    e.preventDefault();
   
    const firstName = document.querySelector("#firstname");
    const lastName = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const birthdate = document.querySelector("#birthdate");
    const quantity = document.querySelector("#quantity");

    //Activation des fonctions
    verifFirstName(firstName);
    verifLastName(lastName);
    verifEmail(email);
    verifBirthdate(birthdate);
    verifQuantity(quantity);
    verifCheckbox();
    verifRadio();

    //On vérifie si toutes les données retournés sont TRUE pour valider et 
    //lancer le message de confirmation et remerciement
    if(resultFirstName === true &&
       resultLastName === true &&
       resultEmail === true &&
       resultBirthdate === true &&
       resultQuantity === true &&
       resultLocation === true &&
       resultCheckbox === true){

        modalbg.style.display = "none";
        confirmationModal.style.display = "block";
      }
};


confirmationBtn.addEventListener('click', () => {
confirmationModal.style.display = "none";

});

