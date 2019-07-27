import { getStudent } from "./StudentNewAPI ";
import { PrinterAdapter } from "./PrinterAdapter";

// import { getStudent } from "./StudentAPI";
// import { Printer } from "./Printer";

export const adapterDemo = () => {
  /*getStudent().forEach(st => {
    const printer = new Printer(st);
    printer.print();
  });
  */
  getStudent().forEach(st => {
    const printer = new PrinterAdapter(st);
    printer.print();
  })
}
