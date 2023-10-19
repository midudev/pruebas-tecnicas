import styles from "./../css/loader.module.css";

export default function Loader() {
  return (
    <div className="w-full h-[calc(100vh-192px)] flex items-center justify-center">
      <span className={styles.loader}></span>
    </div>
  );
}
