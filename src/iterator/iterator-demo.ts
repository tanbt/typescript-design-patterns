import { ConcreteIterableCollection } from "./ConcreteIterableCollection";

const strCol: string[] = ["bb", "aa", "cc", "zz", "dd"];
const stringForCol = new ConcreteIterableCollection(strCol);

const numCol: number[] = [11, 33, 22, 99, 88];
const numBackCol = new ConcreteIterableCollection(numCol, false);

export const iteratorDemo = () => {
  while(stringForCol.getIterator().hasNext()) {
    console.log(stringForCol.getIterator().getNext());
  }

  while(numBackCol.getIterator().hasNext()) {
    console.log(numBackCol.getIterator().getNext());
  }
}
