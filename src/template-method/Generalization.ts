export abstract class Generalization {
  findSolution(): void {
    this.stepOne();
    this.stepTwo();
    this.stepThr();
    this.stepFor();
  }

  private stepOne(): void {
    console.log("Generalization.stepOne");
  }

  abstract stepTwo(): void;
  abstract stepThr(): void;

  stepFor(): any {
    console.log("Generalization.stepFor");
  }
}