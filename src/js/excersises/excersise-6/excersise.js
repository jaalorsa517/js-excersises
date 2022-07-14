import { createAll, cleanConsole } from "../../shared/data";

export default function excersise1() {
  const companies = createAll();

  cleanConsole(6, companies);

  console.log("---- EXAMPLE 6 --- ");
}
