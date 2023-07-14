import { writable } from 'svelte/store';
import { stateUseCase } from '../state';

export const appState = writable(stateUseCase.state, () => stateUseCase.setDefaultState());
