import { onAction } from 'nanostores'

import { toast } from '$lib/utils'
import { currentListName, lists } from './store'

/** @brief Enables the invokation of a toast when an action fails.  */
function showToastOnError ({ onError, actionName, shared }: any) {

  onError((error: string) => {

    // The duration of the toast on screen.
    const duration = 2500
    toast.error(error, duration)
  })
}

/** @brief Binds the action hooks to the store. */
export function bindActionHooks () {

  onAction(lists, showToastOnError)
  onAction(currentListName, showToastOnError)
}
