import React from "react";
import "./_video.scss";

import { AiFillEye } from "react-icons/ai";

const Video = () => {
  return (
    <div className="video">
      <div className="video_top">
        <img
          src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
          alt=""
        />
        {/* <LazyLoadImage src={medium.url} effect='blur' /> */}
        <span>04:76</span>
      </div>
      <div className="video_title">Create hvhvd inmdugqugd</div>
      <div className="video_details">
        <span>
          <AiFillEye />
          5M Views •
        </span>
        <span> 5 days ago</span>
      </div>
      <div className="video_channel">
        {/* <LazyLoadImage src={channelIcon?.url} effect='blur' /> */}
        <img
          src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
          alt=""
        />
        <p>channelTitle</p>
      </div>
    </div>
  );
};

export default Video;
