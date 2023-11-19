interface Props {
  loaderSize?: 'sm' | 'md' | 'lg'
  isFullScreen?: boolean
}

const SIZES = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12'
}

export default function Loading({
  loaderSize = 'sm',
  isFullScreen = false
}: Props) {
  const size = SIZES[loaderSize]

  return (
    <div
      className={
        isFullScreen
          ? 'absolute inset-0 grid place-content-center bg-black/50'
          : ''
      }
    >
      <div
        role='progressbar'
        className={`${size} rounded-full border-4 border-zinc-500 border-l-blue-600 animate-spin`}
      />
    </div>
  )
}
