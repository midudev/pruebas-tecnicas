interface Props {
  className?: string
  value: number
}

export const Badge: React.FC<Props> = ({ className = 'w-6 h-6 top-[-8px] right-[-8px] bg-red-500 rounded-full text-white', value }) => {
  return (
		<div
			className={`absolute flex justify-center items-center ${
				className
			}`}
		>
			<p className="font-bold text-xs text-center">{value}</p>
		</div>
  )
}
