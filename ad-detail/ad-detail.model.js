
export async function getAd(adId) { //le pasamos el id para que sparrest nos de solo ese anuncio
    try {
        const response = await fetch(`http://localhost:8000/api/ads/${adId}?_expand=user`);
        const ad = await response.json();

        if (!response.ok) {
            throw new Error("Recurso no existente");
        }

        return ad;

    } catch (error) {
        throw new Error(error.message)
    }
}


//Funcion para el borrado del anuncio

export async function removeAd(adId) {
    const token = localStorage.getItem('jwt');

    try {
        const response = await fetch(`http://localhost:8000/api/ads/${adId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error("Recurso no existente");
        }
    } catch (error) {
        throw new Error(error.message)
    }
}
