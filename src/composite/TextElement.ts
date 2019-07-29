import { IElement } from "./IElement";
import { DefaultElement } from "./DefaultElement";

export class TextElement implements IElement {
  constructor(private _content: string){}

  public print(level: number): void {
    const spaces = DefaultElement.getSpaces(level);
    console.log(`${spaces}${this._content}`);
  }

  public add(el: IElement): void {
    // no op
  }

  public isText(): boolean {
    return true;
  }
}