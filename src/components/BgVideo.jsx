import React from "react";
import ReactPlayer from "react-player";
// import Video from "react-native-video";
// import sample from './sample.mp4';

import journey from "./video/journey.mp4";
const BgVideo = () => {
  return (
    <div className="  flex justify-center items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={` h-screen  w-screen object-cover aspect-video p-0 m-0 relative -z-10 
      `}
      >
        <source src={journey} type="video/mp4" />
      </video>

      <div className="text-center absolute">
        <h1
          className={`text-[160px] text-sky-50 font-semibold font-sanserif duration-500 hover:opacity-40`}
        >
          Journey
        </h1>
        <a
          href=""
          className={`text-sky-50 font-semibold text-[24px] border border-sky-50 px-4 py-2 m-2 hover:opacity-40 duration-0.5s`}
        >
          Explore
        </a>
      </div>
      {/* <ReactPlayer url="https://www.pexels.com/video/drone-footage-of-a-mountain-forest-5607838/" /> */}
    </div>
  );
};

export default BgVideo;
