import viewNotFound from "../views/notFound.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = viewNotFound;

  return divElement;
};
