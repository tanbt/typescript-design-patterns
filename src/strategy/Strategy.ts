export interface Strategy {
  getName(): string;
  execute(a: number, b: number): number;
}