import style from './IconButton.module.css'

export function IconButton({
	icon: Icon,
	className,
	handleClick,
	transparent,
	...props
}) {
	return (
		<button
			className={`${style.button} ${transparent ? style.transparent : ''} ${
				className || ''
			}`}
			onClick={handleClick}
			{...props}
		>
			<Icon className={style.icon}></Icon>
		</button>
	)
}
