import { appState } from '../../store/store';
import type { GlobalState } from '../../types';
import type { StatePorts } from './state.ports';

export class StateUsecase {
    private globalState: GlobalState;

    constructor(private readonly ports: StatePorts) {}

    setDefaultState() {
        const defaultState = this.ports.setDefaultState();

        this.updateState(defaultState);
    }

    get state(): GlobalState {
        return this.globalState;
    }

    updateState(state: Partial<GlobalState>) {
        this.globalState = { ...this.globalState, ...state };

        // Svelte entry point
        appState.set(this.globalState);
    }
}
