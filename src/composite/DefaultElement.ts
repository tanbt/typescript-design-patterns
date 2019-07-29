import { IElement } from "./IElement";

export class DefaultElement implements IElement {
  private _children: IElement[] = [];

  constructor(private _tag: string) { }

  public print(level: number = 1): void {
    const spaces = DefaultElement.getSpaces(level);
    console.log(`${spaces}<${this._tag}>`);
    this._children.forEach(c => c.print(level + 1));
  }

  public add(...el: IElement[]): void {
    this._children = this._children.concat(el);
  }

  public isText(): boolean {
    return false;
  }

  public static getSpaces(level: number): string {
    let spaces: string = "";
    for (let i = 0; i < level; i++) {
      spaces += "    ";
    }
    return spaces;
  }
}