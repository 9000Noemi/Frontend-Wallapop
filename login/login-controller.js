import { REGEXP } from "../utils/constants.js";
import { loginUser } from "./login-model.js";
import { showSpinner, hideSpinner } from "../utils/spinner.js";


export function loginController(loginForm) {

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userEmailElement = loginForm.querySelector("#user-mail");
    const passwordElement = loginForm.querySelector("#password");

    const userEmail = userEmailElement.value;
    const password = passwordElement.value;


    // 2- validar el mail
    const emailRegExp = new RegExp(REGEXP.mail);
    if (!emailRegExp.test(userEmail)) {
      alert('formato de mail incorrecto')
    } else {
      handleLoginUser(userEmail, password)
    }

  })
}

async function handleLoginUser(userEmail, password) {

  const spinner = document.querySelector('.spinner')
  
  try {
    showSpinner(spinner);
    const token = await loginUser(userEmail, password);

    localStorage.setItem("jwt", token);
    alert("Has iniciado sesión correctamente");
    window.location.href = "/"

  } catch (error) {
    alert(error.message)

  }finally {
    hideSpinner(spinner);
  }
}
