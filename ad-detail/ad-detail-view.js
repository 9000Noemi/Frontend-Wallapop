export function buildAdDetail(ad) {
  const createdAt = new Date(ad.updatedAt);

  return `
      <div>
        <span>usuario: ${ad.userId} - ${createdAt.toLocaleDateString()}</span>
        <p>${ad.images}</p>
        <p>${ad.name}</p>
        <p>${ad.description}</p>
        <p>${ad.price}</p>
        <p>${ad.type}</p>
      </div>
  `;
}

export function buildDeleteButton() {
  const removeButton = document.createElement('button');
  removeButton.textContent = "Borrar anuncio";

  return removeButton;
}
