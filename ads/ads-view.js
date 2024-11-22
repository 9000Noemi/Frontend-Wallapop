// Cálculo del html que vamos a mostrar al usuario


//REVISAR!
export const buildAd = (ad) => {
    const newAd = document.createElement('div');
    //const createdAt = new Date(tweet.updatedAt)
    //newTweet.innerHTML = `
      //<span>${createdAt.toLocaleDateString()}</span>
      //<p>${tweet.message}</p>
    //`;
    return newAd;
  }


//Indicar al usuario que no hay anuncios
export function buildEmptyAdList() {
    return '<h2>No hay anuncios disponibles</h2>';
  }