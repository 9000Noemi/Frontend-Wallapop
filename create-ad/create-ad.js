import { createAdController } from "./create-ad-controller.js";
import { isUserLoggedIn } from "../utils/auth.js";

//Si no estamos logados no podemos acceder a crear un anuncio, dar feedback y redirigir a la home
if (!isUserLoggedIn()) {
  alert("Debes iniciar sesión para crear un anuncio");
  window.location.href = "/"
}

document.addEventListener("DOMContentLoaded", () => {
  const createAdForm = document.querySelector("#ad-form");

  createAdController(createAdForm)
})
