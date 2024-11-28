//Funciones mostrar y ocultar spinner

export function showSpinner(spinner) {
  if (spinner) {
    spinner.classList.remove('hidden');
  } 
}

export function hideSpinner(spinner) {
  if (spinner) {
    spinner.classList.add('hidden');
  } 
}
