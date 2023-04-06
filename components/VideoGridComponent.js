import React from "react";
import ReactPlayer from "react-player";
import Gallery from "react-grid-gallery";

const videos = [
  {
    id: 1,
    src: "https://bit.ly/3m4egMs",
    poster: "https://bit.ly/3mcCt36",
  },
  {
    id: 2,
    src: "https://bit.ly/3m4egMs",
    poster: "https://bit.ly/3mcCt36",
  },
  {
    id: 3,
    src: "https://bit.ly/3m4egMs",
    poster: "https://bit.ly/3mcCt36",
  },
  // Agrega más objetos de video aquí...
];

const VideoGallery = () => {
  const [currentVideo, setCurrentVideo] = React.useState(null);

  const handleVideoClick = (index) => {
    setCurrentVideo(videos[index]);
  };

  const handleCloseModal = () => {
    setCurrentVideo(null);
  };

  const playerConfig = {
    file: {
      attributes: {
        controlsList: "nodownload",
      },
    },
  };

  const [volume, setVolume] = useState(0.5);

  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
  };

  return (
    <div className="container mx-auto px-4">
      <Gallery
        images={videos}
        onClickThumbnail={(index) => handleVideoClick(index)}
        rowHeight={200}
        margin={10}
        tagStyle={{ display: "none" }}
        thumbnailStyle={{ borderRadius: "4px" }}
        customOverlay={
          <div className="z-50 absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="relative w-full md:w-1/2 h-full">
              {currentVideo && (
                <div className="aspect-w-16 aspect-h-9">
                  {/* <ReactPlayer
                    url={currentVideo.src}
                    playing
                    controls
                    config={playerConfig}
                    volume
                    width="100%"
                    height="100%"
                  /> */}
                  <video
                    controls
                    id="video-player"
                    poster={currentVideo.poster}
                  >
                    {/* //TODO CHECK WHY THE VIDEO IS MUTED */}
                    <source src={currentVideo.src} type="video/mkv" />
                  </video>
                  {/* <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                  /> */}
                </div>
              )}
              <button
                onClick={handleCloseModal}
                className="absolute top-0 right-0 p-4 text-white"
              >
                Close
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default VideoGallery;
s;
