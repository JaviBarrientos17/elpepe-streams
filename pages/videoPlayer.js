import React from "react";
import ReactPlayer from "react-player";

const MyVideoPlayer = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full max-w-4xl mx-auto">
        <ReactPlayer
          url="https://fra1.angelthump.com/hls/MjAyMy0wNS0wNlQxNTo0ODozOC4xMjdaZWxwaW50YXVuYXM=_elpintaunas/index.m3u8"
          controls
          playing={false}
          muted={false}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default MyVideoPlayer;
