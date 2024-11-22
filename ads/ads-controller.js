import { getAds } from "./ads-model.js";
import { buildEmptyAdList } from "./ads-view.js";


function drawAds(ads, adsContainer) {

    //Si no hay anuncios mostramos el mensaje de buildEmptyAdList
    if(!ads.length) {
      adsContainer.innerHTML = buildEmptyAdList();
      
    } else {

      ads.forEach(ad => {
        const newAd = buildAd(ad);
        adsContainer.appendChild(newAd);
      })
    }
  }