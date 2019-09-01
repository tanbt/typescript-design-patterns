import { Visitable } from "./Visitable";
import { Visitor } from "./Visitor";

export class Industry implements Visitable {

  visit(visitor: Visitor): void {
    visitor.visitIndustry(this);
  }

  // this method can be abstracted
  public getIndustryInfo(): string {
    return "Welcome to Industry!";
  }
}