import {Store} from './Store';

export class ReduceStore extends Store {
    constructor(dispatcher) {
        super(dispatcher);
        this._history = [];
    }
    reduce(state, action) {
        throw new Error("Subclasses need to implement the reduce method");
    }
    _onDispatch(action) {
        const newState = this.reduce(this._state, action);
        if(newState !=== this._state) {
            this._history.push(this._state);
            this._state = newState;
            this._emitChange();
        }
    }
    revertLastState() {
        if(this._history.length > 0) {
            this._state = this._history.pop();
        }
        this._emitChange();
    }
}

