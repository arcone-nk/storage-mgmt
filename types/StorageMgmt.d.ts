declare type Val = null | boolean | string | number | object | Array<null | boolean | number | object>;
export default class StorageMgmt {
    private _storage;
    constructor(type: 'local' | 'session');
    /**
     * save item
     * @param key
     * @param val
     */
    set(key: string, val: Val): StorageMgmt;
    /**
     * get item
     * @param key
     */
    get(key: string): Val;
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
export {};
