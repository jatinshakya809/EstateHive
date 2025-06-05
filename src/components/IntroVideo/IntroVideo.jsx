import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const IntroVideo = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!showVideo) return null;

  return (
    <div
      className={`fixed z-50 ${
        isMobile
          ? "inset-0 flex items-center justify-center p-2 bg-transparent"
          : "bottom-4 right-20 bg-yellow-500 bg-opacity-80 p-1"
      } shadow-lg`}
    >
      <div
        className={`relative rounded-xl overflow-hidden ${
          isMobile ? "w-[95vw] h-[60vh]" : ""
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setShowVideo(false)}
          className="absolute top-1 right-14 md:right-1 text-black font-extrabold text-lg  bg-opacity-60 rounded-full px-2 z-50"
        >
          ✕
        </button>

        {/* Sound Toggle - shown on both mobile and desktop */}
        <button
          onClick={() => setIsMuted((prev) => !prev)}
          className="absolute bottom-2 left-14 md:left-2 z-50 bg-black text-white text-sm px-2 py-1 rounded"
        >
          {isMuted ? "🔊 Sound On" : "🔇 Mute"}
        </button>

        {/* ReactPlayer */}
        <ReactPlayer
          url="https://res.cloudinary.com/jatincloud809/video/upload/v1748757289/p7wxasttugttelcfg7bl.mp4"
          playing
          muted={isMuted}
          controls={false}
          loop
          width="100%"
          height={isMobile ? "100%" : "50vh"}
          style={{ borderRadius: "0.5rem" }}
          config={{
            file: {
              attributes: {
                autoPlay: true,
                playsInline: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default IntroVideo;
