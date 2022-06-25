import VideoPlayer from "./components/VideoPlayer";

function App() {
  const video = "videos/nosferatu.mp4";
  const popupData = [
    {
      time: 5,
      duration: 5,
      text: "This is a popup for 5 seconds",
      thumbnail: "images/default-thumbnail.jpg",
      position: "top",
    },
    {
      time: 15,
      duration: 10,
      text: "This is a popup for 10 seconds",
      thumbnail: "images/default-thumbnail.jpg",
      position: "bottom",
    },
  ];

  return (
    <div>
      <VideoPlayer videoSource={video} popupData={popupData} />
    </div>
  );
}

export default App;
