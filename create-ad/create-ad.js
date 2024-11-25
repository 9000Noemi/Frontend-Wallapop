import { createAdController } from "./create-ad-controller.js";
import { isUserLoggedIn } from "./utils/auth.js"

if (!isUserLoggedIn()) {
  window.location.href = "/"
}

document.addEventListener("DOMContentLoaded", () => {
  const createAdForm = document.querySelector("#ad-form");

  createAdController(createAdForm)
})
