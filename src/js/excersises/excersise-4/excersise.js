import { createAll, cleanConsole } from "../../shared/data";

export default function excersise1() {
  const companies = createAll();

  cleanConsole(4, companies);

  console.log("---- EXAMPLE 4 --- ");
}
