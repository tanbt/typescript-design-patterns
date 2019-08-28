import { Strategy } from "./Strategy";

export class StrategySubtract implements Strategy {
  getName(): string {
    return "subtract";
  }
  execute(a: number, b: number): number {
    return a - b;
  }

}