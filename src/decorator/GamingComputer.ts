import { AbstractComputerDecorator } from "./AbstractComputerDecorator";

export class GamingComputer extends AbstractComputerDecorator {
  public display() {
    console.log("Display for gaming computer.");
  }
}