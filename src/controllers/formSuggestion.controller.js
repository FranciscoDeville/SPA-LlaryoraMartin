import viewForm from "../views/formSuggestion.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = viewForm;

  async function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(this);

    const response = await fetch("https://formspree.io/f/mwkzgjoe", {
      method: "POST",
      body: fd,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      this.reset();
      alert("Form enviado");
    } else {
      alert("ERROR!!");
    }
  }
  const form = divElement.querySelector("#formSuggestion"); //document.getElementById("formSuggestion")
  form.addEventListener("submit", handleSubmit);

  return form;
};
