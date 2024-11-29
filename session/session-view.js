export function buildAuthorizedSession() {
  return `
    <a href="/create-ad.html">Crear anuncio</a>
    <button>Cerrar sesión</button>
  `
}

export function buildUnauthorizedSession() {
  return `
    <a href="/login.html">Iniciar sesión</a>
    <a href="/signup.html">Registro</a>
  `
}
