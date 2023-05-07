import React from "react";

const MyVideoPlayer = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="max-w-screen-lg w-full mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64">
        <iframe
          title="Player"
          className="w-full h-96 md:h-500px"
          src="https://player.angelthump.com/?channel=pepegustavo3345"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowTransparency="true"
          allowFullScreen=""
          scrolling="no"
          seamless=""
        ></iframe>
      </div>
    </div>
  );
};

export default MyVideoPlayer;
