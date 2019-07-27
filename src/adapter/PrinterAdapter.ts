import { Printer } from "./Printer";
import { NewStudent } from "./StudentNewAPI ";
import { Student } from "./StudentAPI";

export class PrinterAdapter {
  constructor(private _new_st: NewStudent) {
  }

  public print():void {
    const oldStd: Student = {
      id: this._new_st.student_id,
      name: this._new_st.name
    };
    const oldPrinter = new Printer(oldStd);
    oldPrinter.print();
  }
}