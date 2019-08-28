import { Strategy } from "./Strategy";

export class Context {
  private _strategy: Strategy;

  public setStrategy(str: Strategy): void {
    this._strategy = str;
  }

  public calculate(a: number, b: number): void {
    console.log(`${a} ${this._strategy.getName()} ${b} = ${this._strategy.execute(a,b)}`);
  }
}