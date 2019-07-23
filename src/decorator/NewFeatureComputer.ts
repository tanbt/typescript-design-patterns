import { AbstractComputerDecorator } from "./AbstractComputerDecorator";

export class NewFeatureComputer extends AbstractComputerDecorator {
  public showOff() {
    console.log("This is new feature out of defined computer interface.");
  }
}