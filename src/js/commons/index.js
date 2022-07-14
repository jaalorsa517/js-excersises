import buildHome from '../home';

export function build(template) {
 const app = document.querySelector("#app");
  app.innerHTML = template;
}

export function eventReturn() {
  const returnButton = document.querySelector(".app__return");
  returnButton.removeEventListener("click", buildHome);
  returnButton.addEventListener("click", buildHome);
}