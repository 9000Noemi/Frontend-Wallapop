//Obtención de datos de los anuncios desde SPARREST

export async function getAds() {

    try {
        const response = await fetch("http://localhost:8000/api/ads");
        if (!response.ok) {
            throw new Error("Recurso no existente");
        }
        const ads = await response.json();

        return ads;

    } catch (error) {
        return []
    }
}

