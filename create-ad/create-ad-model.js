
export async function createAd(adData) {
    const token = localStorage.getItem('jwt');
  
    const response = await fetch("http://localhost:8000/api/ads", {
      method: "POST",
      body: JSON.stringify({
        adData
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
  