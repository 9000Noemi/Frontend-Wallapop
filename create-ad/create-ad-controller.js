import { createAd } from "./create-ad-model.js";
import { showSpinner, hideSpinner } from "../utils/spinner.js";

export function createAdController(createAdForm) {


    // Escuchar el evento submit del formulario para obtener los datos de creación del anuncio:

    createAdForm.addEventListener("submit", (event) => {
        event.preventDefault();

        //Capturar los valores de cada campo del formulario para formar el objeto de datos del anuncio:

        const imageInput = createAdForm.querySelector("#image");
        const nameInput = createAdForm.querySelector("#name");
        const descriptionInput = createAdForm.querySelector("#description");
        const priceInput = createAdForm.querySelector("#price");
        const purchaseRadio = createAdForm.querySelector("#purchase");
        const typeRadio = createAdForm.querySelector('input[name="purchaseorsale"]:checked');
        const type = typeRadio ? typeRadio.value : null; // Obtiene el valor de radio seleccionado

        //Validación (a parte del required de html)
        if (!nameInput.value || !descriptionInput.value || !priceInput.value || !type) {
            alert("Por favor, completa todos los campos obligatorios");
            return;
        }

        // Creamos el objeto que contiene la info del anuncio:
        const adInfo = {
            images: imageInput.value,
            name: nameInput.value,
            description: descriptionInput.value,
            price: priceInput.value,
            type: type,
        };


        // Si la validación pasa, se llama a handleAdCreation(adInfo), que maneja la creación del anuncio:
        handleAdCreation(adInfo)

    }

    )
};


async function handleAdCreation(adInfo) {

    const spinner = document.querySelector('.spinner')

    showSpinner(spinner);
    
    try {
        await createAd(adInfo)
        alert("Tu anuncio ha sido creado.");
        window.location.href = "/"
    } catch (error) {
        alert(error.message)
    } finally {
        hideSpinner(spinner);
      }
}


