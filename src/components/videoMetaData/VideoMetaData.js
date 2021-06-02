import React, { useEffect } from "react";
import "./_videoMetaData.scss";
import moment from "moment";
import numeral from "numeral";
import { connect } from "react-redux";

import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import { getChannelDetails } from "../../redux/actions/channelAction";

const VideoMetaData = ({
  selectedVideo: { snippet, statistics },
  videoId,
  getChannelDetails,
  channelDetails,
  subscriptionStatus,
}) => {
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;
  const { snippet: channelSnippet, statistics: channelStatistics } =
    channelDetails;
  useEffect(() => {
    getChannelDetails(channelId);
  }, [getChannelDetails, channelId]);
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData_top">
        <h4>{title}</h4>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(viewCount).format("0.a")} Views •{" "}
            {moment(publishedAt).fromNow()}
          </span>

          <div>
            <span className="mr-3">
              <MdThumbUp size={26} /> {numeral(likeCount).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} /> {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData_channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src={channelSnippet?.thumbnails?.default?.url}
            alt="avatar"
            className="rounded-circle mr-3"
          />
          <div className="d-flex lex-column  ">
            <span>{channelTitle}</span>
            <span>
              {numeral(channelStatistics?.subscriberCount).format("0.a")}{" "}
              Subscibers
            </span>
          </div>
        </div>
        <button
          className={`p-2 m-2 border-0 btn ${
            subscriptionStatus && "btn-gray"
          } `}
        >
          {subscriptionStatus ? "Subscribed" : "Subscribe"}
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
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedVideo: state.selectedVideo.video,
  loading: state.selectedVideo.loading,
  channelDetails: state.channelDetails.channel,
  subscriptionStatus: state.channelDetails.subscriptionStatus,
});

export default connect(mapStateToProps, { getChannelDetails })(VideoMetaData);
