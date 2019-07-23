import { AbstractComputerDecorator } from "./AbstractComputerDecorator";

export class ServerComputer extends AbstractComputerDecorator {
  public display() {
    console.log("Server has no display!")
  }

  public connectNetwork() {
    console.log("Server computer connecting...")
  }
}