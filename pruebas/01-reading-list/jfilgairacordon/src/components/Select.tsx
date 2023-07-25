import './Select.css'

type Props = | {
  label: string
  name: string
  value: string
  options: string[]
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export function Select ({ options, label, name, value, onChange }: Props) {
  return (
    <div className="select-container">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}>
          <option value="all">Todos</option>
          {
            options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))
          }
      </select>
    </div>
  )
}
