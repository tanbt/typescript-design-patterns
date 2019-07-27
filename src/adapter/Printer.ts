import { Student } from "./StudentAPI";

export class Printer {
  constructor(private _st: Student) {
  }

  public print(): void {
    console.log(this._st.id + ": " + this._st.name);
  }
}
