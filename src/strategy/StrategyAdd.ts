import { Strategy } from "./Strategy";

export class StrategyAdd implements Strategy {
  getName(): string {
    return "add";
  }
  execute(a: number, b: number): number {
    return a + b;
  }

}