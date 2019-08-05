import { Tree } from "./Tree";

export class TreeType {

  /**
   * Construct a type
   *
   * @param _name must be unique for each type
   * @param _color other data belong to a type
   */
  constructor(private _name: string, private _color: string) { }

  /**
   * Draw a tree
   *
   * @param x x-axis value
   * @param y y-axis value
   */
  public draw(tree: Tree) {
    console.log(`Tree at (${tree.x},${tree.y}); Type: ${this._name}, color: ${this._color}`);
  }
}
