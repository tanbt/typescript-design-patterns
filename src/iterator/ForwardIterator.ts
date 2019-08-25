import { Iterator } from "./Iterator";
import { IterableCollection } from "./IterableCollection";

export class ForwardIterator<E> implements Iterator<E> {

  private _position: number = 0;

  constructor(private _collection: IterableCollection<E>) { }

  hasNext(): boolean {
    return !!this._collection.getItems()[this._position + 1];
  }

  // get then move next
  getNext(): E {
    return this._collection.getItems()[this._position++];
  }

  reset(): void {
    this._position = 0;
  }

}