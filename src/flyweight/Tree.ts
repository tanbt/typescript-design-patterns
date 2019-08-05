import { TreeType } from "./TreeType";

export class Tree {
  constructor(private _x: number, private _y: number, private _type: TreeType) { }

  public get x() {
    return this._x;
  }
  public get y() {
    return this._type;
  }

  public plan():void {
    this._type.draw(this);
  }
}
