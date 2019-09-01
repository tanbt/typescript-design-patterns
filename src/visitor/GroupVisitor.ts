import { Visitor } from "./Visitor";
import { City } from "./City";
import { Industry } from "./Industry";

export class GroupVisitor implements Visitor {
  visitCity(city: City): void {
    console.log("Group visit." + city.getCityInfo());
  }

  visitIndustry(ind: Industry): void {
    console.log("Group visit." + ind.getIndustryInfo());
  }

}