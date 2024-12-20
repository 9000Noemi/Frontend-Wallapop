export const buildAd = (ad) => {

  //Crear un elemento HTML <a> (un enlace)
  const newAd = document.createElement('a');

  //Añadir un atributo al nodo newAd con setAttribute. Pasamos el link y el id al que queremos acceder:
  newAd.setAttribute("href", `/ad-detail.html?id=${ad.id}`);

  const createdAt = new Date(ad.updatedAt)

  //Construir el contenido html: campos del formulario
  newAd.innerHTML = `
    <div>
      <p>${ad.images}</p>
      <p>${ad.name}</p>
      <p>${ad.description}</p>
      <p>${ad.price}</p>
      <p>${ad.type}</p>
    </div>
  `;
  return newAd;
}

//Indicar al usuario que no hay anuncios
export function buildEmptyAdList() {
  return '<h2>No hay anuncios disponibles</h2>';
}