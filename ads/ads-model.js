//Obtención de datos de los anuncios desde SPARREST

export async function getAds(page = 1, perPage = 10) {

    try {
        const response = await fetch(`http://localhost:8000/api/ads?_page=${page}&_per_page=${perPage}`);
        if (!response.ok) {
            throw new Error("Recurso no existente");
        }
        const ads = await response.json();

        return ads;

    } catch (error) {
        return []
    }
}

