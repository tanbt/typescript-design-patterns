import { IterableCollection } from "./IterableCollection";
import { Iterator } from "./Iterator";
import { ForwardIterator } from "./ForwardIterator";
import { BackwardIterator } from "./BackwardIterator";

export class ConcreteIterableCollection<T> implements IterableCollection<T> {

  private _iterator: Iterator<T>;

  constructor(private _collection: T[], private _flag: boolean = true) {
    this._iterator = this._flag ? new ForwardIterator<T>(this) : new BackwardIterator<T>(this);
  };

  getItems(): T[] {
    return this._collection;
  }

  /**
   * An example flag for getting different iterator
   *
   * @param flag
   *          false if using BackwardIterator
   */
  getIterator(): Iterator<T> {
    return this._iterator;
  }

}
