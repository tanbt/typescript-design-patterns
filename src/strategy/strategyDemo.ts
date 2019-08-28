import { Context } from "./Context";
import { StrategyAdd } from "./StrategyAdd";
import { StrategySubtract } from "./StrategySubtract";
import { StrategyMultiply } from "./StrategyMultiply";

/*
Example: https://refactoring.guru/design-patterns/strategy
*/

export const strategyDemo = () => {
  const context = new Context();
  const add = new StrategyAdd();
  context.setStrategy(add);
  context.calculate(2, 3);

  const subtract = new StrategySubtract();
  context.setStrategy(subtract);
  context.calculate(2, 3);

  const multiply = new StrategyMultiply();
  context.setStrategy(multiply);
  context.calculate(2, 3);

}
