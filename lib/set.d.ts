/// <reference lib="es6" />

declare class Set<T> {
  /**
   * Returns true if `inst` is a `Set`.
   * This does not necessarily imply instanceof, but the check
   * is safe across frame boundaries, as it is done by looking for
   * `inst[Symbol.for('@iter-tools/set')]`
   */
  static isSet(inst: any): boolean;

  constructor(values?: Iterable<T> | null);

  readonly size: number;

  clear(): void;

  has(value: T): boolean;

  add(value: T): void;

  delete(value: T): void;

  forEach(cb: (value: T, key: T, set: Set<T>) => any): void;

  keys(): IterableIterator<T>;

  values(): IterableIterator<T>;

  entries(): IterableIterator<[T, T]>;

  [Symbol.iterator](): IterableIterator<T>;
}

export default Set;
