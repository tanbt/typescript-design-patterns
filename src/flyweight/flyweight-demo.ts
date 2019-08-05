import { TreeTypesFactory } from "./TreeTypesFactory";
import { Tree } from "./Tree";
import { TreeType } from "./TreeType";

/**
https://refactoring.guru/design-patterns/flyweight/java/example
- Tree: define each tree instance
- TreeType: define each tree type
- TreeTypeFactory: get | create | cache tree types
*/

// Init tree types
TreeTypesFactory.getTreeType("Spring", "Green");
TreeTypesFactory.getTreeType("Autumn", "Orange");
TreeTypesFactory.getTreeType("Winter", "White");

const getRandomType = (): TreeType => {
  const types = ["Spring" , "Autumn", "Winter"];
  const typeName = types[Math.floor(Math.random() * types.length)];
  return TreeTypesFactory.getTreeType(typeName);
}

let forest: Tree[] = [];
for (let i = 0; i < 1000; i++) {
  const tree = new Tree(i, 1000-i, getRandomType())
  forest.push(tree);
}

export const flyWeightDemo = () => {
  forest.forEach(tree => tree.plan());
}
