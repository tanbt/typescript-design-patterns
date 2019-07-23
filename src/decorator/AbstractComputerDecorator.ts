import { IComputer } from "./IComputer";

/**
 * Acts like a wrapper of an IComputer instance
 */
export abstract class AbstractComputerDecorator implements IComputer {
  constructor(private _computer: IComputer) {
  }

  public display(): void {
    this._computer.display();
  }

  public print(): void {
    this._computer.print();
  }

  public connectNetwork(): void {
    this._computer.connectNetwork();
  }
}
