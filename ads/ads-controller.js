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

  let currentPage = 1; // Página inicial
  const adsPerPage = 10; // Número de anuncios por página

  const spinner = document.querySelector('.spinner')

  // Función para cargar y dibujar los anuncios
  async function loadAndDrawAds(page) {
    adsContainer.innerHTML = "";
    showSpinner(spinner);

    try {
      const ads = await getAds(currentPage, adsPerPage);
      drawAds(ads, adsContainer);

      // Actualizar los botones de navegación
      updatePaginationControls(page);

    } catch (error) {
      alert(error.message)
    } finally {
      hideSpinner(spinner);
    }
  }

  //Función para actualizar los controles de paginación
  function updatePaginationControls(page) {
    const paginationContainer = document.querySelector('#pagination-controls');
    paginationContainer.innerHTML = `
      <button id="prev-page" ${page === 1 ? 'disabled' : ''}>Anterior</button>
      <span>Página ${page}</span>
      <button id="next-page">Siguiente</button>
    `;

    document.querySelector('#prev-page').addEventListener('click', () => {
      currentPage = Math.max(1, currentPage - 1);
      loadAndDrawAds(currentPage);
    });

    document.querySelector('#next-page').addEventListener('click', () => {
      currentPage += 1;
      loadAndDrawAds(currentPage);
    });
  }

  // Inicializar la primera carga
  await loadAndDrawAds(currentPage);

}

