import viewHome from '../views/home.html'

export default () => {

  const divElement = document.createElement("div");
  divElement.innerHTML = viewHome;

  const btnClick = divElement.querySelector('#btnClick')
  btnClick.addEventListener('click', () => {
    alert('Click!!!')
  })

  return divElement;
};