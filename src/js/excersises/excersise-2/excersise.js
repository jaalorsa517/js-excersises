import { createAll, cleanConsole } from "../../shared/data";

export default function () {
  const companies = createAll();

  cleanConsole(2, companies);

  console.log("---- EXAMPLE 2 --- ");
}
