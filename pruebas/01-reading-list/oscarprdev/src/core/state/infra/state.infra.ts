import { type GlobalState } from '../../types';

export interface StateInfra {
    setDefaultLibraryState(globalState: GlobalState): GlobalState
}

export class DefaultStateInfra implements StateInfra {
    private readonly localStorageStateName = 'state';
    constructor() {}

    setDefaultLibraryState(globalState: GlobalState): GlobalState {
        const currentLocalStorage = JSON.parse(localStorage.getItem('state'))

        if (currentLocalStorage) {
            return currentLocalStorage
        }

        localStorage.setItem(this.localStorageStateName, JSON.stringify(globalState));

        return globalState;
    }
}
