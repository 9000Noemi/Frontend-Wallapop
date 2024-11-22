import { signupController } from "./signup-controller.js"

document.addEventListener("DOMContentLoaded", () => {
  
  const signupForm = document.querySelector('form')
  signupController(signupForm)
})
