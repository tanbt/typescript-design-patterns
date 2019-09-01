import { Generalization } from "./Generalization";
import { Realization } from "./Realization";

/*
An abstract class with a template method which calls other abstract methods.
Concrete classes will implement abstract methods.

Template Method is based on inheritance: it lets you alter parts of an algorithm by extending those parts in subclasses.
Strategy is based on composition.

Template Method works at the class level, so it’s static.
Strategy works on the object level, letting you switch behaviors at runtime.

Demo: https://sourcemaking.com/design_patterns/template_method/java/2
*/

export const templateMethodDemo = () => {
  const alg: Generalization = new Realization();
  alg.findSolution();
}
