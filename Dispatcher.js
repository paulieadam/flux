export class Dispatcher {
    constructor() {
        this._listeners = [];
    }
    dispatch(action) {
        this._listeners.forEach(listener => listener(action));
    }
    register(listener) {
        this_listeners.push(listener);
    }
}

