import { Visitable } from "./Visitable";

export interface Visitor {
  // can use override methods with different parameters
  visitCity(city: Visitable): void;
  visitIndustry(ind: Visitable): void;
}