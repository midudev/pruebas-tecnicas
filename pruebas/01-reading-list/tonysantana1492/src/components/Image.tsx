import { ImgSkeletonScreen } from './ImgSkeletonScreen'
import { useLoadImage } from '../hooks'

interface Props {
  alt: string
  src: string
  className: string
}

export const Image: React.FC<Props> = ({ alt, src, className }) => {
  const { loading } = useLoadImage({ src })

  return (
		<div className={className}>
			{loading ? <ImgSkeletonScreen /> : <img alt={alt} src={src} className="object-cover w-full h-full" />}
		</div>
  )
}
