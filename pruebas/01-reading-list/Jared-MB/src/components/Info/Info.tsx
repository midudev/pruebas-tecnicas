import { useInfoState } from "../../store"

export default function Info() {
	
	const { showInfo, message, coords } = useInfoState()

	if (showInfo) {
		return (
			<span className='absolute bg-zinc-700 text-zinc-300 p-1 rounded text-sm' style={{ left: coords.x + 20, top: coords.y + 20 }}>{message}</span>
		)
	}

	return null
}