import { getCurrentUserInfo } from "../auth/auth-model.js"
import { getAd, removeAd } from "./ad-detail.model.js"
import { buildDeleteButton, buildAdDetail } from "./ad-detail-view.js"
import { isUserLoggedIn } from "../utils/auth.js"
import { showSpinner, hideSpinner } from "../utils/spinner.js"

//Función para controlar la visualización de los detalles de un anuncio(nodo HTML,id del anuncio)

export async function adDetailController(adDetailContainer, adId) {

  const spinner = document.querySelector('.spinner')

  showSpinner(spinner);

  try {
    const ad = await getAd(adId)

    //Pintar el anuncio
    adDetailContainer.innerHTML = buildAdDetail(ad)

    //Comprobar si hay un usuario logado

    if (isUserLoggedIn()) {

      const user = await getCurrentUserInfo();

      //Comparar el id del autor del anuncio con el id del usuario logado
      if (user.id === ad.userId) {

        //Si los id's son iguales, crear botón de borrar
        const removeButtonElement = buildDeleteButton();
        adDetailContainer.appendChild(removeButtonElement);

        //Cuando el botón se pulse, borrar el tweet, previa confirmación
        removeButtonElement.addEventListener("click", async () => {
          const shouldRemoveAd = confirm('¿Estás seguro de que quieres borrar el anuncio?');
          if (shouldRemoveAd) {
            await removeAd(ad.id);
            window.location.href = "/"
          }
        })
      }
    }
  } catch (error) {
    alert(error.message)
    window.location.href = "/"
  } finally {
    hideSpinner(spinner);
  }

}


