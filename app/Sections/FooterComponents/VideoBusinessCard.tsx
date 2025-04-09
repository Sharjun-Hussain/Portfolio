"use client";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";

export const VideoContactCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  return (
    <div className="relative rounded-2xl overflow-hidden aspect-video w-full max-w-2xl mx-auto">
      <ReactPlayer
        ref={playerRef}
        url="/contact-video.mp4" // 15-30 sec intro video
        width="100%"
        height="100%"
        playing={isPlaying}
        controls={false}
        loop
        muted
      />

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <button
            onClick={() => setIsPlaying(true)}
            className="w-16 h-16 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
        <h3 className="text-white text-xl font-bold mb-2">Personal Message</h3>
        <p className="text-gray-300 mb-4">
          Watch my intro video, then let&quot;s connect!
        </p>
        <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-2 rounded-lg font-medium">
          Schedule Call
        </button>
      </div>
    </div>
  );
};
