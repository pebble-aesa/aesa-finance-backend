export default class Cache<T> {
  private cache: Map<string, {
    value: T;
    expires: number;
  }> = new Map();

  public has(key: string): boolean {
    return this.cache.has(key);
  }

  public get(key: string): T | undefined {
    const item = this.cache.get(key);
    if (item && item.expires > Date.now()) {
      return item.value;
    }
    return undefined;
  }

  public set(key: string, value: T, ttl: number): void {
    this.cache.set(key, {
      value,
      expires: Date.now() + ttl,
    });
  }
}
