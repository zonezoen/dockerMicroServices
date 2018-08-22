const localStorage = require('node-localstorage').LocalStorage;
const debug = require('debug')('dev:localstorage');
/**
 * 提供service 缓存
 */
class ServiceLocalStorage {
    constructor() {
        this.localStorage = new Map();
    }
    getItem(key) {
        return this
            .localStorage
            .get(key) || [];
    }
    setItem(key, value = []) {
        const ipValues = value.map(item => {
            // 获取Ip与Port端口
            return `${item.ServiceAddress}:${item.ServicePort}`
        });
        debug(`set key:${key},value:${ipValues.toString()}`);
        this
            .localStorage
            .set(key, ipValues);
    }
    removeItem(key) {
        this
            .localStorage
            .delete(key);
    }
    clear() {
        this
            .localStorage
            .clear();
    }
}
module.exports = new ServiceLocalStorage();