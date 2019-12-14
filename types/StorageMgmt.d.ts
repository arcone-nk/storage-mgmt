export default class StorageMgmt {
    private _storage;
    constructor(type: 'local' | 'session');
    /**
     * save item
     * @param key
     * @param val
     */
    set<T>(key: string, val: T): StorageMgmt;
    /**
     * get item
     * @param key
     */
    get<T>(key: string): T;
    /**
     * remove item
     * @param key
     */
    remove(key: string): StorageMgmt;
    /**
     * storage clear
     */
    clear(): void;
}
