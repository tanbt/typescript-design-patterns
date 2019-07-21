import { DiContainer } from "./di-container";

interface IDepA {
  doA() : void;
}

interface IDepB {
  doB() : void;
}

interface IDepC {
  doC() : void;
}

class ConcreteA implements IDepA {
  doA(): void {
    console.log("Doing A.");
  }
}

class ConcreteB implements IDepB {
  doB(): void {
    console.log("Doing B.");
  }
}

class ConcreteC implements IDepC {
  constructor(private _concreteA: IDepA, private _concreteB: IDepB) {}

  doC(): void {
    console.log("Doing C by doing A and B: ")
    this._concreteA.doA();
    this._concreteB.doB();
  }
}

export const diDemo = () => {
  let container = DiContainer.instance;
  container.register("IDepA", [], ConcreteA);
  container.register("IDepB", [], ConcreteB);
  container.register("IDepC", ["IDepA", "IDepB"], ConcreteC);

  const a = container.resolve<IDepA>("IDepA");
  a.doA();
  container.resolve<IDepC>("IDepC").doC();
}
