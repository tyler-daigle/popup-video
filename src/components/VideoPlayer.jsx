import { useState, useMemo } from "react";
import styles from "../styles/VideoPlayer.module.css";
import VideoPopup from "./VideoPopup";

// create a time line of when the popups should appear.
// The keys are the time in seconds that the popup should appear.
// If there is no key for a specific time, that means no popup should show at that time

function createPopupTimeLine(popupData) {
  return {
    5: { popupIndex: 0 },
    6: { popupIndex: 0 },
    7: { popupIndex: 0 },
    8: { popupIndex: 0 },
    9: { popupIndex: 0 },
    10: { popupIndex: 0 },
  };
}

export default function VideoPlayer({ videoSource, popupData }) {
  const [currentPopupItem, setCurrentPopupItem] = useState(null);

  const popupTimeLine = useMemo(
    () => createPopupTimeLine(popupData),
    [popupData]
  );

  // loop through every popupData and get the time it displays

  const videoTick = (currentTime) => {
    console.log(`checking ${currentTime}`);
    if (popupTimeLine[currentTime]) {
      setCurrentPopupItem(popupData[popupTimeLine[currentTime].popupIndex]);
    } else {
      if (currentPopupItem) {
        // if a popup item is currently being shown, hide it
        setCurrentPopupItem(null);
      }
    }
  };

  return (
    <div className={styles.videoPlayerContainer}>
      {currentPopupItem && (
        <VideoPopup
          popupContent={currentPopupItem.text}
          popupThumbnail={currentPopupItem.thumbnail}
          popupTitle="This is the title."
          position={currentPopupItem.position}
        />
      )}

      <video
        onPlay={() => console.log("Play has started.")}
        onTimeUpdate={(e) => videoTick(Math.floor(e.target.currentTime))}
        className={styles.videoPlayer}
        controls
      >
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  );
}
