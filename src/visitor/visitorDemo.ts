import { Visitable } from "./Visitable";
import { City } from "./City";
import { Industry } from "./Industry";
import { IndividualVisitor } from "./IndividualVisitor";
import { GroupVisitor } from "./GroupVisitor";

/*
https://sourcemaking.com/design_patterns/visitor/java/1
*/
export const visitorDemo = () => {
  const places: Visitable[] = [new City(), new Industry()];
  const indVi = new IndividualVisitor();
  const grVi = new GroupVisitor();
  places.forEach(p => {
    p.visit(indVi);
    p.visit(grVi);
  })
}
