export async function createAd(adData) {
  
    const token = localStorage.getItem('jwt');

    //Decostruccion del objeto adData para que se pinte cada atributo
    const {images, name, description, price, type} = adData

    const response = await fetch("http://localhost:8000/api/ads", {
      method: "POST",
      body: JSON.stringify({
        images, name, description, price, type
      }),
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
  
    if (!response.ok) {
      throw new Error("Error creando el anuncio")
    }
   
  }
  