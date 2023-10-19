import styles from '../styles/main.module.css'
import { ACTIONS_MSGS } from './BookNotification'

const { IS_ALREADY_IN_LIST, ADD_TO_SPECIFIC_LIST, DELETE_FROM_LIST } = ACTIONS_MSGS

export const TITLE_VARIANTS = {
  delete: (nameList) => `${DELETE_FROM_LIST} ${nameList}`,
  isAlready: (nameList) => `${IS_ALREADY_IN_LIST} "${nameList}"`,
  default: (nameList) => `${ADD_TO_SPECIFIC_LIST} "${nameList}"`
}

export function ActionListButton({
  Icon,
  action,
  variant = '',
  size = '',
  nameList = '',
  extraClassNames = ''
}) {
  const classNames = [styles[size], styles[variant], styles[extraClassNames]]
    .filter(Boolean)
    .join(' ')

  const title = variant in TITLE_VARIANTS
    ? TITLE_VARIANTS[variant](nameList)
    : TITLE_VARIANTS.default(nameList)

  return (
    <button
      role='button'
      className={`${styles.actionListButton} ${classNames}`}
      title={title}
      onClick={action}
    >
      <Icon />
    </button>
  )
}
