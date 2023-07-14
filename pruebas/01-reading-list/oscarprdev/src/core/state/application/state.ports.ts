import type { GlobalState } from '../../types';

export interface StatePorts {
    setDefaultState(): GlobalState;
}
