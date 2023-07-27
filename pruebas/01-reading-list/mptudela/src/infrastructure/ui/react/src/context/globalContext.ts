import { createContext } from 'react';
import { GlobalStore } from '@/store/globalStore';

export const GlobalContext = createContext<GlobalStore>({} as GlobalStore);
