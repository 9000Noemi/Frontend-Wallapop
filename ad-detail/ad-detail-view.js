
export function buildAdDetail(ad) {
    const createdAt = new Date(ad.updatedAt);
    
    //REVISAR: ES LO MISMO QUE EN AD-VIEW
    return `
      <div>
        <span>${createdAt.toLocaleDateString()}</span>
        <p>${tweet.message}</p>
      </div>
    `
  }
  
  export function buildDeleteButton() {
    const removeButton = document.createElement('button');
    removeButton.textContent = "Borrar anuncio";
  
    return removeButton;
  }
  