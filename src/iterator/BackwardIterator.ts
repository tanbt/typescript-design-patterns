import { Iterator } from "./Iterator";
import { IterableCollection } from "./IterableCollection";

export class BackwardIterator<E> implements Iterator<E> {

  private _position: number;

  constructor(private _collection: IterableCollection<E>) {
    this._position = _collection.getItems().length - 1;
  }

  hasNext(): boolean {
    return this._position >= 0;
  }

  // get then move next
  getNext(): E {
    return this._collection.getItems()[this._position--];
  }

  reset(): void {
    this._position = this._collection.getItems().length;
  }

}