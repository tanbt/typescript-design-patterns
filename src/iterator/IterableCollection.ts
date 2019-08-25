import { Iterator } from "./Iterator";

export interface IterableCollection<T> {
  getItems(): T[];
  getIterator(flag: boolean): Iterator<T>;
}