import { createAll, cleanConsole } from "../../shared/data";

export default function excersise1() {
  const companies = createAll();

  cleanConsole(3, companies);

  console.log("---- EXAMPLE 3 --- ");
}
