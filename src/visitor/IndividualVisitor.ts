import { Visitor } from "./Visitor";
import { City } from "./City";
import { Industry } from "./Industry";

export class IndividualVisitor implements Visitor {
  visitCity(city: City): void {
    console.log("Individual visit." + city.getCityInfo());
  }

  visitIndustry(ind: Industry): void {
    console.log("Individual visit." + ind.getIndustryInfo());
  }

}