import VideoPopup from "../components/VideoPopup";
import "../index.css";

export default {
  title: "VideoPopup",
  component: VideoPopup,
};

export const DefaultPopup = () => {
  return (
    <VideoPopup
      popupContent={
        "This is the movie Nosferatu which is amazingly 100 years old. This is the movie Nosferatu which is amazingly 100 years old."
      }
      popupTitle="This is Nosferatu"
    />
  );
};
