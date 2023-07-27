import { useAppDispatch } from './store'
import {
  changeVisibleListBook,
  changeVisibleSection
} from '../reducers/visibleListBook'

export function useVisibleListBook () {
  const dispatch = useAppDispatch()

  const setVisible = ({ isSection, visible }: { isSection: boolean, visible: boolean }) => {
    if (isSection) {
      dispatch(changeVisibleSection({ visible }))
    } else {
      dispatch(changeVisibleListBook({ visible }))
    }
  }

  return {
    setVisible
  }
}
