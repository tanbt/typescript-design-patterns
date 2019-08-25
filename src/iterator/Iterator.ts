export interface Iterator<E> {
  hasNext(): boolean;

  getNext(): E;

  reset(): void;
}