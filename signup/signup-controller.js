import { REGEXP } from "../utils/constants.js";
import { createUser } from "./signup-model.js";
import { showSpinner, hideSpinner } from "../utils/spinner.js";

export function signupController(form) {

  // 1- obtener los datos del formulario
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const userEmailElement = form.querySelector("#user-mail");
    const passwordElement = form.querySelector("#password");

    
    const userEmail = userEmailElement.value;
    const password = passwordElement.value;
    
    const errors = [];

    // 2- validarlos
    const emailRegExp = new RegExp(REGEXP.mail);
    if (!emailRegExp.test(userEmail)) {
      errors.push('formato de mail incorrecto')
    }


    for (const error of errors) {
      // mostrar notificaciones
    }

    if (errors.length === 0) {
      handleCreateUser(userEmail, password)
    }
  })

}

async function handleCreateUser(userEmail, password) {
  const spinner = document.querySelector('.spinner')
  try {
    showSpinner(spinner);
    await createUser(userEmail, password)
    alert("Te has registrado correctamente");
    window.location.href = "/";
  } catch (error) {
    alert(error.message)
  }finally {
    hideSpinner(spinner);
  }
}
