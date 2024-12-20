import { sessionController } from "./session/session-controller.js";
import { adsController } from "./ads/ads-controller.js";

document.addEventListener("DOMContentLoaded", () => {

  const adsContainer = document.querySelector("#ads-container");
  const sessionContainer = document.querySelector("#session");

  sessionController(sessionContainer);
  adsController(adsContainer);

})
