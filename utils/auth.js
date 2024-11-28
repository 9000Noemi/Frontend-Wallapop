export const isUserLoggedIn = () => {
  const token = localStorage.getItem('jwt');
  //Transformar a boolean:
  return !!token;
}
