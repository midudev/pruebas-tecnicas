import AddIcon from "./icons/AddIcon"
import RemoveIcon from "./icons/RemoveIcon"

type ButtonProps = {
  onClick: () => void
  text: string
  className: string
  remove?: boolean
}

export default function Button({ onClick, className, text, remove = false }: ButtonProps) {
  return (
    <button
      type="button"
      name={remove ? "remove-from-read" : "add-to-read"}
      onClick={onClick}
      className={`rounded-full font-pop mx-2 text-primary py-2 ${className} flex justify-center gap-3 hover:underline-offset-4 hover:underline transition-all duration-300`}
    >
      {remove ? <RemoveIcon /> : <AddIcon />}
      <span>{text}</span>
    </button>
  )
}