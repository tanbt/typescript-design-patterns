import { Strategy } from "./Strategy";

export class StrategyMultiply implements Strategy {
  getName(): string {
    return "multiply";
  }
  execute(a: number, b: number): number {
    return a * b;
  }

}