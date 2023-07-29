import { action } from 'nanostores'
import { currentLayout } from './store'

import type { Layout } from '../lib/types'

/** @brief Sets the current layout of the library. */
export const setCurrentLayout = action(currentLayout, 'setCurrentLayout',
  (store, layout: Layout) => { store.set(layout) })
