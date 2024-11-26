
export const buildAd = (ad) => {
  
  ////crear un elemento HTML <a> (un enlace)
  const newAd = document.createElement('a');

  //Añadir un atributo al nodo newAd con setAttribute. Pasamos el link y el id al que queremos acceder:
  newAd.setAttribute("href", `/ad-detail.html?id=${ad.id}`);

  const createdAt = new Date(ad.updatedAt)

  
//Construir el contenido html: usuario, fecha formateada

  newAd.innerHTML = `
    <div>
      <span>usuario: ${ad.userId} - ${createdAt.toLocaleDateString()}</span>
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