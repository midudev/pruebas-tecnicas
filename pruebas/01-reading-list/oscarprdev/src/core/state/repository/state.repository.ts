import type { GlobalState } from '../../types';
import type { StatePorts } from '../application/state.ports';
import type { StateInfra } from '../infra/state.infra';

export class StateRepository implements StatePorts {
    constructor(private readonly stateInfra: StateInfra) {}

    setDefaultState(): GlobalState {
        return this.stateInfra.setDefaultLibraryState();
    }
}
