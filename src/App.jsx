import VideoPlayer from "./components/VideoPlayer";

function App() {
  const video = "videos/nosferatu.mp4";
  const popupData = [
    {
      time: 5,
      duration: 5,
      text: "This is a popup for 5 seconds.This is a longer title and this thing is actually working pretty good. How long can this be?",
      // thumbnail: "images/default-thumbnail.jpg",
      position: "top",
      title: "This is the first popup. ",
    },
    {
      time: 15,
      duration: 10,
      text: "This is a popup for 10 seconds",
      thumbnail: "images/default-thumbnail.jpg",
      position: "bottom",
      title: "This is the second popup.",
    },
  ];

  return (
    <div>
      <VideoPlayer videoSource={video} popupData={popupData} />
    </div>
  );
}

export default App;
