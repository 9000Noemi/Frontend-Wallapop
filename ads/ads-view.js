
//REVISAR!
export const buildAd = (ad) => {

  ////crear un elemento HTML <a> (un enlace)
  const newAd = document.createElement('a');

  //Añadir un atributo al nodo newAd con setAttribute. Pasamos el link y el id al que queremos acceder:
  newAd.setAttribute("href", `/ad-detail.html?id=${ad.id}`);

  const createdAt = new Date(ad.updatedAt)
//Construir el contenido html: usuario, fecha formateada

//FALTA PASAR LOS DATOS CONCRETOS DEL ANUNCIO, NO SE COMO SE HACE

  newAd.innerHTML = `
    <div>
      <span>usuario: ${ad.user.username} - ${createdAt.toLocaleDateString()}</span>
      <p>${tweet.message}</p>
    </div>
  `;
  return newAd;
}


//Indicar al usuario que no hay anuncios
export function buildEmptyAdList() {
  return '<h2>No hay anuncios disponibles</h2>';
}