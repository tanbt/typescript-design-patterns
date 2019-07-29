export interface IElement {
  print(level: number): void;
  add(...el: IElement[]): void;
  isText(): boolean;
}
