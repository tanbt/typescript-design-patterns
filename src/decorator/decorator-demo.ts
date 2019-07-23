import { DefaultComputer } from "./DefaultComputer";
import { GamingComputer } from "./GamingComputer";
import { OfficeComputer } from "./OfficeComputer";
import { ServerComputer } from "./ServerComputer";
import { NewFeatureComputer } from "./NewFeatureComputer";

export const decoratorDemo = () => {

  const computer = new DefaultComputer;
  const gameComp = new GamingComputer(computer);
  const officeComp = new OfficeComputer(gameComp);

  officeComp.display();
  officeComp.print();
  officeComp.connectNetwork();

  console.log("------------------------");
  const serverComp = new ServerComputer(officeComp);
  serverComp.display();
  serverComp.print();
  serverComp.connectNetwork();

  console.log("\n");
  const newComp = new NewFeatureComputer(serverComp);
  newComp.showOff();
}
