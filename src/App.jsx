import VideoPlayer from "./components/VideoPlayer";

function App() {
  const video = "videos/nosferatu.mp4";
  const popupData = [
    {
      time: 5,
      duration: 5,
      text: "This is some content here. This was created with the codepen tool that I made.",
      title: "This is the first popup",
      thumbnail: "images/default-thumbnail.jpg",
      position: "top",
    },
    {
      time: 13,
      duration: 9,
      text: "This one will not have a thumbnail and it will be on the bottom.",
      title: "This is the second popup",
      thumbnail: null,
      position: "bottom",
    },
    {
      time: 30,
      duration: 8,
      text: "This the third popup and it appears at 30 seconds and stays there for 8 seconds",
      title: "30 Second Mark",
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
