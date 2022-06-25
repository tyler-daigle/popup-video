import VideoPopup from "../components/VideoPopup";
import "../index.css";

export default {
  title: "VideoPopup",
  component: VideoPopup,
};

const Template = (args) => <VideoPopup {...args} />;

export const PopupNoThumbnail = Template.bind({});
PopupNoThumbnail.args = {
  popupContent: "This is the content",
  popupTitle: "This is the title",
};

export const PopupWithThumbnail = Template.bind({});
PopupWithThumbnail.args = {
  popupContent: "This is the content",
  popupTitle: "This is the title",
  popupThumbnail: "images/default-thumbnail.jpg",
};

function PopupInContainerTemplate(props) {
  const { position } = props;
  return (
    <div
      style={{
        position: "relative",
        width: "90%",
        height: "auto",
        aspectRatio: "16/9",
        border: "dashed 1px red",
        overflow: "hidden",
      }}
    >
      <VideoPopup
        popupContent="This popup is in a container"
        popupTitle="This is the title."
        popupThumbnail="images/default-thumbnail.jpg"
        position={position}
      />
    </div>
  );
}
export const PopupInContainer = PopupInContainerTemplate.bind({});
PopupInContainer.args = {
  position: "bottom",
};
// export const DefaultPopup = () => {
//   return (
//     <VideoPopup
//       popupContent={
//         "This is the movie Nosferatu which is amazingly 100 years old. This is the movie Nosferatu which is amazingly 100 years old."
//       }
//       popupTitle="This is Nosferatu"
//     />
//   );
// };
