import styles from "../styles/VideoPlayer.module.css";
export default function VideoPlayer({ videoSource, popupData }) {
  return (
    <div className={styles.videoPlayerContainer}>
      <video className={styles.videoPlayer} controls>
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  );
}
