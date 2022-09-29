export class BiDirectionalMap<K, V> {
  private readonly forwardMap = new Map<K, V>();

  private readonly reverseMap = new Map<V, K>();

  constructor(map?: Map<K, V> | Array<[K, V]>) {
    if (map) {
      if (map instanceof Map) {
        map.forEach((value, key) => {
          this.set(key, value);
        });
      } else if (Array.isArray(map)) {
        map.forEach((entry) => {
          this.set(entry[0], entry[1]);
        });
      }
    }
  }

  get size(): number {
    return this.forwardMap.size;
  }

  set(key: K, value: V): this {
    const existingValue = this.forwardMap.get(key);
    if (existingValue != null) this.reverseMap.delete(existingValue);

    const existingKey = this.reverseMap.get(value);
    if (existingKey != null) this.forwardMap.delete(existingKey);

    this.forwardMap.set(key, value);
    this.reverseMap.set(value, key);
    return this;
  }

  clear(): void {
    this.forwardMap.clear();
    this.reverseMap.clear();
  }

  getValue(key: K): V | undefined {
    return this.forwardMap.get(key);
  }

  getKey(value: V): K | undefined {
    return this.reverseMap.get(value);
  }

  deleteKey(key: K): boolean {
    const value = this.forwardMap.get(key);
    if (value == null) return false;
    this.reverseMap.delete(value);
    return this.forwardMap.delete(key);
  }

  deleteValue(value: V): boolean {
    const key = this.reverseMap.get(value);
    if (key == null) return false;
    this.forwardMap.delete(key);
    return this.reverseMap.delete(value);
  }

  hasKey(key: K): boolean {
    return this.forwardMap.has(key);
  }

  hasValue(value: V): boolean {
    return this.reverseMap.has(value);
  }

  keys(): IterableIterator<K> {
    return this.forwardMap.keys();
  }

  values(): IterableIterator<V> {
    return this.reverseMap.keys();
  }

  entries(): IterableIterator<[K, V]> {
    return this.forwardMap.entries();
  }

  forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: unknown): void {
    return this.forwardMap.forEach(callbackfn, thisArg);
  }
}
