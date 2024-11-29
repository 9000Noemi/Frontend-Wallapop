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

export async function adsController(adsContainer) {

  adsContainer.innerHTML = "";
  const spinner = document.querySelector('.spinner')
  showSpinner(spinner);

  try {
    const ads = await getAds();
    drawAds(ads, adsContainer)

  } catch (error) {
    alert(error.message)
  } finally {
    hideSpinner(spinner);
  }
}