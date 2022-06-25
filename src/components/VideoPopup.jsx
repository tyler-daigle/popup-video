import styles from "../styles/VideoPopup.module.css";

export default function VideoPopup({
  popupContent,
  popupThumbnail,
  popupTitle,
}) {
  return (
    <div className={styles.popupContainer}>
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
