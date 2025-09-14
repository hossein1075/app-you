import React, { useEffect, useRef } from 'react'
import videojs from 'video.js'
import "video.js/dist/video-js.css";

function VideoJsSec({ options }) {
  const videoRef = useRef(null)
  const playerRef = useRef(null)

  useEffect(() => {
    if (videoRef.current && !playerRef.current) {
      const timeout = setTimeout(() => {
        playerRef.current = videojs(videoRef.current, options);
      }, 0);

      return () => {
        clearTimeout(timeout);
        if (playerRef.current) {
          playerRef.current.dispose();
          playerRef.current = null;
        }
      };
    }
  }, [options]);

  return (
    <div data-vjs-player className="w-full h-full absolute top-0 left-0">
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered w-full h-full"
        playsInline
        controls
      />
    </div>
  )
}

export default VideoJsSec