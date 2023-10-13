import styles from './loader.module.css'
export const Loader = () => {
    return (
        <div className={styles["dot-spinner"]}>
            <div className={styles["dot-spinner__dot"]}></div>
            <div className={styles["dot-spinner__dot"]}></div>
            <div className={styles["dot-spinner__dot"]}></div>
            <div className={styles["dot-spinner__dot"]}></div>
            <div className={styles["dot-spinner__dot"]}></div>
            <div className={styles["dot-spinner__dot"]}></div>
            <div className={styles["dot-spinner__dot"]}></div>
            <div className={styles["dot-spinner__dot"]}></div>
        </div>
    )
}
