import viewPost from "../views/posts.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = viewPost;

  return divElement;
};
