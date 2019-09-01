import { Generalization } from "./Generalization";

export abstract class Specialization extends Generalization {

  stepThr(): void {
    this.step3_1();
    this.step3_2();
    this.step3_3();
  }
  private step3_3(): void {
    console.log("Specialization.step3_3");
  }
  abstract step3_2(): void;

  private step3_1(): void {
    console.log("Specialization.step3_1");
  }

}