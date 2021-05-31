import React from "react";
import "./_videoMetaData.scss";
import moment from "moment";
import numeral from "numeral";

import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";

const VideoMetaData = ({ selectedVideo, videoId }) => {
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData_top">
        <h4>{selectedVideo?.snippet?.title}</h4>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(selectedVideo?.statistics?.viewCount).format("0.a")} Views
            • {moment(selectedVideo?.snippet?.publishedAt).fromNow()}
          </span>

          <div>
            <span className="mr-3">
              <MdThumbUp size={26} />{" "}
              {numeral(selectedVideo?.statistics?.likeCount).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} />{" "}
              {numeral(selectedVideo?.statistics?.dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData_channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src="https://image.flaticon.com/icons/png/512/147/147144.png"
            alt="avatar"
            className="rounded-circle mr-3"
          />
          <div className="d-flex lex-column  ">
            <span>{selectedVideo?.snippet?.channelTitle}</span>
            <span> {numeral(1000).format("0.a")} Subscibers</span>
          </div>
        </div>
        <button
          className={`p-2 m-2 border-0 btn 
               `}
        >
          Subscribed
        </button>
      </div>

      <div className="videoMetaData_description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          {selectedVideo?.snippet?.description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
