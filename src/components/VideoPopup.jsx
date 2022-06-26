import styles from "../styles/VideoPopup.module.css";

export default function VideoPopup({
  popupContent,
  popupThumbnail,
  popupTitle,
  position = "bottom",
}) {
  return (
    <div
      className={`${styles.popupContainer} ${
        position === "bottom" ? styles.popupBottom : styles.popupTop
      } ${styles.opening}`}
    >
      {popupThumbnail && (
        <img
          className={styles.popupThumbnail}
          src={popupThumbnail}
          alt="popup thumbnail"
          height="100"
        />
      )}

      <div className={styles.popupContentContainer}>
        <aside>
          {popupTitle && (
            <span className={styles.popupTitle}>{popupTitle}</span>
          )}
          <p className={styles.popupContent}>{popupContent}</p>
        </aside>
      </div>
    </div>
  );
}
