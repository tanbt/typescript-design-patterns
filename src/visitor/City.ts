import { Visitable } from "./Visitable";
import { Visitor } from "./Visitor";

export class City implements Visitable {

  visit(visitor: Visitor): void {
    visitor.visitCity(this);
  }

  // this method can be abstracted
  public getCityInfo(): string {
    return "Welcome to City!";
  }
}