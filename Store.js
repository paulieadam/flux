export class Store {
    constructor(dispatcher) {
        this._listeners = [];
        this._state = this.getInitialState();
        dispatcher.register(this._onDispatch.bind(this));
    }
    getInitialState() {
        throw new Error("Subclasses need to override the getInitialState method");
    }
    _onDispatch() {
        throw new Error("Subclasses need to override the _onDispatch method");
    }
    addListener(listener) {
        this._listeners.push(listener);
    }
    _emitChange() {
        this._listeners.forEach(listener => listener(this._state));
    }
}

