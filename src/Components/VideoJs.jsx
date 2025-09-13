import React, { useEffect, useRef } from 'react'
import videojs from 'video.js'
import "video.js/dist/video-js.css";
function VideoJsSec({ option }) {
    const videoRef = useRef(null)
    const playerRef = useRef(null)

    useEffect(() => {
        if (videoRef.current && !playerRef.current) {
            playerRef.current = videojs(videoRef.current, options);
        }
        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, [option])
    return (
        <div data-vjs-player>
            <video ref={videoRef} className="video-js vjs-big-play-centered"/>
        </div>
    )
}

export default VideoJsSec