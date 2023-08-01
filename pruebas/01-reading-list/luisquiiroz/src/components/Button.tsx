interface Props {
  value: string
  action: (value: string) => void
  selected: string
}
export function Button ({ value, action, selected }: Props) {
  const optionSelected = value === selected ? 'bg-orange-1 text-white' : 'text-brown-1'
  return (
    <button
      className={`text-xs hover:bg-orange-1 hover:text-white py-1 px-2 rounded-xl ${optionSelected}`}
      onClick={() => action(value)}
    >
      + {value}
    </button>
  )
}
