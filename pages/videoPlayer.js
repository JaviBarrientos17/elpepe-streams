import React from "react";

const MyVideoPlayer = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full max-w-4xl mx-auto">
        <iframe
          title="Player"
          className="w-full h-96 md:h-500px"
          src="https://player.angelthump.com/?channel=elpintaunas"
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
