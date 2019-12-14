export default class StorageMgmt {
  private _storage: Storage

  constructor(type: 'local' | 'session') {
    if (type === 'session') {
      this._storage = sessionStorage
    } else {
      this._storage = localStorage
    }
  }

  /**
   * save item
   * @param key
   * @param val
   */
  public set<T>(key: string, val: T): StorageMgmt {
    this._storage.setItem(key, JSON.stringify(val, null, 0))
    return this
  }

  /**
   * get item
   * @param key
   */
  public get<T>(key: string): T {
    const item = this._storage.getItem(key)
    return item === null ? null : JSON.parse(item)
  }

  /**
   * remove item
   * @param key
   */
  public remove(key: string): StorageMgmt {
    this._storage.removeItem(key)
    return this
  }

  /**
   * storage clear
   */
  public clear(): void {
    this._storage.clear()
  }
}
