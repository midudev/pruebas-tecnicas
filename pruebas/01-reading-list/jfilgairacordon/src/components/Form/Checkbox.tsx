import './Checkbox.css'

type Props = | {
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  label: string
}

export function Checkbox ({ name, onChange, checked, label }: Props) {
  return (
    <div className='checkbox'>
      <label htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        onChange={onChange}
        checked={checked}
        type="checkbox" />
    </div>
  )
}
