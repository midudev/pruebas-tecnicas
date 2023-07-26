import { Ploc } from "../..//core/common/presentation/Ploc"
import { Ref, onMounted, onUnmounted, ref } from "vue"
export function usePlocState<S>(ploc: Ploc<S>): Ref<S> {
  const state = ref(ploc.state) as Ref<S>

  const stateSubscription = (newState: S) => {
    state.value = newState
  }

  onMounted(() => {
    ploc.subscribe(stateSubscription)
  })

  onUnmounted(() => {
    ploc.unsubscribe(stateSubscription)
  })

  return state
}
