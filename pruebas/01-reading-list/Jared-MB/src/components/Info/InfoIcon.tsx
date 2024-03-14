import { BsInfoCircleFill } from 'react-icons/bs'
import { useInfoState } from '../../store/infoStore'

interface Props {
	message: string,
	bg?: string
}

export function InfoIcon(props: Props) {

	const { setCoords, setMessage, setShowInfo } = useInfoState()

	const handleCoords = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
		setMessage(props.message)
		const coords = {
			x: e.clientX,
			y: e.clientY
		}
		setCoords(coords)
	}

	return (
		<span onMouseEnter={handleCoords} onMouseLeave={() => setShowInfo(false)}>
			<BsInfoCircleFill className={`${props.bg || 'text-purple-700'} cursor-pointer`} />
		</span>
	)
}