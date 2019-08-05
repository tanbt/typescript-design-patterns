import { TreeType } from "./TreeType";

export class TreeTypesFactory {
  private static _treeTypesMap: Map<String, TreeType> = new Map();

  public static getTreeType(name: string, color: string = ""): TreeType {
    let treeType: TreeType = this._treeTypesMap.get(name);
    if (!treeType) {
      treeType = new TreeType(name, color);
      this._treeTypesMap.set(name, treeType);
    }
    return treeType;
  }

}
