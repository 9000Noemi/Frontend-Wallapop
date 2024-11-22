//Obtención de daros desde SPARREST

export async function getAds() {

    try {
        const response = await fetch("http://localhost:8000/api/ads");
        //Si la peticion no ha ido bien:
        if (!response.ok) {
            throw new Error("Recurso no existente");
        }
        const ads = await response.json();

        return ads;

    } catch (error) {
        return []
    }
}

