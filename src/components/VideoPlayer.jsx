import { useState } from "react";
import styles from "../styles/VideoPlayer.module.css";
import VideoPopup from "./VideoPopup";

export default function VideoPlayer({ videoSource, popupData }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentPopupIndex, setCurrentPopupIndex] = useState(0);
  const [currentPopupItem, setCurrentPopupItem] = useState(null);

  popupData.forEach((item) => console.log(item));
  // create a videoPaused state and check if that has changed
  // if the video is paused we have to pause the timers that
  // close the popups also.

  // also have to reset the index of the current popup if we go backwards.

  const checkForPopupTime = (currentTime) => {
    if (popupData && currentPopupIndex < popupData.length) {
      if (popupData[currentPopupIndex].time === Math.floor(currentTime)) {
        setPopupVisible(true);

        // set a timer for the duration of the popup and hide it after the time is up.
        setTimeout(
          () => setPopupVisible(false),
          popupData[currentPopupIndex].duration * 1000
        );
        setCurrentPopupItem(popupData[currentPopupIndex]);
        setCurrentPopupIndex(currentPopupIndex + 1);
      }
    }
  };

  return (
    <div className={styles.videoPlayerContainer}>
      {popupVisible && (
        // <div className={styles.popup}>
        //   <p>{popupContent}</p>
        // </div>
        <VideoPopup
          popupContent={currentPopupItem.text}
          popupThumbnail={currentPopupItem.thumbnail}
          popupTitle="This is the title."
          position={currentPopupItem.position}
        />
      )}

      <video
        onPlay={() => console.log("Play has started.")}
        onTimeUpdate={(e) => checkForPopupTime(e.target.currentTime)}
        className={styles.videoPlayer}
        controls
      >
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  );
}
