const CLOUDINARY_NAME = 'diywdqe7d'
const TYPE_TRANFORM = 'f_auto,q_auto:good,c_limit';
const CLOUDINERY_URL = `https://res.cloudinary.com/${CLOUDINARY_NAME}/image/fetch`

type Props = {
    src: string,
    width: number,
    className: string
}

export default function Image({ src, className, width }: Props) {

    const w = width ? `w_${width}` : '';

    return (
        <img src={`${CLOUDINERY_URL}/${TYPE_TRANFORM},${w}/${src}`} className={className} />
    )
}