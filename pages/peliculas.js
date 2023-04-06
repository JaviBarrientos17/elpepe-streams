import { useEffect } from "react";
import videojs from "video.js";

function PeliculasComponent() {
  useEffect(() => {
    const player = videojs("my-video");
    return () => {
      player.dispose();
    };
  }, []);

  return (
    <div className="video-container">
      <video
        id="my-video"
        className="video-js vjs-default-skin"
        controls
        preload="auto"
        width="640"
        height="264"
        data-setup="{}"
        poster="https://bit.ly/3mcCt36"
      >
        <source src="https://bit.ly/3MiPT8l" type="video/x-matroska" />
      </video>
    </div>
  );
}

export default PeliculasComponent;
