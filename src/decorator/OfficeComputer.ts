import { AbstractComputerDecorator } from "./AbstractComputerDecorator";

export class OfficeComputer extends AbstractComputerDecorator {
  public print() {
    console.log("Printing for office computer.")
  }
}