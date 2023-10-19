import { useRouterScroll } from '../hooks/useRouterScroll'

export function Link({ target, targetId, ...props }) {
  const { handleCurrentPath } = useRouterScroll()

  const handleClick = (e) => {
    const { altKey, ctrlKey, shiftKey, metaKey } = e

    const isDifferentEvent = altKey ||
      ctrlKey ||
      shiftKey ||
      metaKey
    const isManageableEvent = !target || target === '_self'

    if (!isDifferentEvent && isManageableEvent) {
      e.preventDefault()
      handleCurrentPath(targetId)
    }
  }

  return (
    <a
      href={targetId}
      onClick={handleClick}
      target={target}
      {...props}
    />
  )
}
