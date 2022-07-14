import template from "./home.tmpt";
import {build} from "../commons/index";
import dictionary from "../shared/dictionary";
import excersises from '../excersises';

export default function buildHome() {
  build(template);
  Object.keys(dictionary).forEach((key) => { 
    const li = document.querySelector(`.app__listItem[to="${key}"]`);
    li.removeEventListener("click", excersises[key]);
    li.addEventListener("click", excersises[key]);
  })
}
