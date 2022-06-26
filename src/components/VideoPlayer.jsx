import { useState, useMemo } from "react";
import styles from "../styles/VideoPlayer.module.css";
import VideoPopup from "./VideoPopup";

// create a time line of when the popups should appear.
// The keys are the time in seconds that the popup should appear.
// Each item in the time line will hold the index of the popup that is to appear.
// If there is no key for a specific time, that means no popup should show at that time

function createPopupTimeLine(popupData) {
  // the format of the entries in the timeLine are:
  // {1: {popupIndex: 0}}

  const timeLine = {};

  popupData.forEach((popupItem, popupIndex) => {
    const startingTime = popupItem.time;
    const endingTime = popupItem.time + popupItem.duration;

    for (
      let currentTime = startingTime;
      currentTime <= endingTime;
      currentTime++
    ) {
      timeLine[currentTime] = { popupIndex: popupIndex };
    }
  });

  return timeLine;
}

export default function VideoPlayer({ videoSource, popupData }) {
  const [currentPopupItem, setCurrentPopupItem] = useState(null);

  const popupTimeLine = useMemo(
    () => createPopupTimeLine(popupData),
    [popupData]
  );

  const videoTick = (currentTime) => {
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
          popupTitle={currentPopupItem.title}
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
