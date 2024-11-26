import { adDetailController } from "./ad-detail-controller.js";

document.addEventListener("DOMContentLoaded", () => {

    //Obtener id del anuncio de la url usando la clase URLSearchParams:
    const searchParams = new URLSearchParams(window.location.search);//le pasamos la propiedad search que es la que devuelve los query params

    //Conseguir el id del anuncio y guardarlo en la variable adId
    const adId = searchParams.get("id");

    //Acceder al nodo donde pintaremos el detalle del anuncio
    const adDetailContainer = document.querySelector("#ad-detail")

    //Llamamos a la funcion y le pasamos el nodo y el id
    adDetailController(adDetailContainer, adId)

})