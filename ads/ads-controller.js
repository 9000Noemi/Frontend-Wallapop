import { getAds } from "./ads-model.js";
import { buildAd, buildEmptyAdList } from "./ads-view.js";
import { showSpinner, hideSpinner } from "../utils/spinner.js";

function drawAds(ads, adsContainer) {

  //Si no hay anuncios mostramos el mensaje de buildEmptyAdList
  if (!ads.length) {
    adsContainer.innerHTML = buildEmptyAdList();

  } else {

    ads.forEach(ad => {
      const newAd = buildAd(ad);
      adsContainer.appendChild(newAd);
    })
  }
}


  function fireEvent(message, type, element) {
    const customEvent = new CustomEvent("loading-ads-info", {
      detail: {
        message,
        type,
      }
    });
    element.dispatchEvent(customEvent);
  }


export async function adsController(adsContainer) {
 
  adsContainer.innerHTML = "";
  const spinner = document.querySelector('.spinner')

  showSpinner(spinner);
  try {
    
    const ads = await getAds();
    fireEvent("Anuncios cargados correctamente", "success", adsContainer);
    drawAds(ads, adsContainer)
  } catch (error) {

    fireEvent(error.message, "error", adsContainer);
  } finally {
    hideSpinner(spinner);
  }
}