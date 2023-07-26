import styles from './Card.module.css'
import Button from '../button/Button'

import useDeviceDetect from '../../hooks/useDeviceDetect'

// TODO: Scoring:https://dev.to/michaelburrows/create-a-custom-react-star-rating-component-5o6

export default function Card({ book, isAvailable }) {
    //TODO Change to Const
    if (!book) return null
    const { title, cover, synopsis, author } = book
    const { isMobile, isVisible } = useDeviceDetect()
    const isVisibleButton = isMobile || !isVisible
    return (
        <div className={styles.card}>
            <div>
                <img className={styles.cover} src={cover} alt="cover" />
            </div>
            <div className={`${styles.container} pl-4`}>
                <div className={styles.content}>
                    <div className={styles.score}>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                    </div>
                    <div className="text-[14px] md:text-[16px] font-semibold">
                        <p>{title}</p>
                    </div>
                    <div className="text-[10px] md:text-[12px]">
                        <p>{synopsis}</p>
                    </div>
                    <div className="text-[12px] md:text-[14px] font-medium">
                        <p>{author.name}</p>
                    </div>
                </div>
                {isVisibleButton ? (
                    <Button book={book} isAvailable={isAvailable} />
                ) : null}
            </div>
        </div>
    )
}
