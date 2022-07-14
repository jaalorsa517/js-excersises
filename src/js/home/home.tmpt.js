import dictionary from "../shared/dictionary";

const attrTo = Object.keys(dictionary).map(
  (key) => `<li class="app__listItem" to="${key}"><a href="#">${dictionary[key]}</a></li>`
);

export default `
  <div class="app__container">
    <div class="app__container__img">
      <img class="logo" src="./src/assets/javascript.svg" alt="logo" />
    </div>
    <h1 class="app__title">Bienvenido a los ejercicios de entrenamiento de javascript</h1>
  </div>
  <p class="app__description">
    A continuación se encontrará con la lista de ejercicios donde se pondrá a pruebas el uso de array y objetos en javascript.
  </p>
  <ol class="app__list">
    ${attrTo.join("")}
  </ol>
`;
