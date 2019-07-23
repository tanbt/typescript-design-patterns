import { IComputer } from "./IComputer";

export class DefaultComputer implements IComputer {
  public display(): void {
    console.log("Computer default display.");
  }
  public print(): void {
    console.log("Computer default print.");
  }
  public connectNetwork(): void {
    console.log("Computer default network connection.");
  }
}