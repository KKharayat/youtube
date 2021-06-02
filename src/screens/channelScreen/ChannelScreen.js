import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import numeral from "numeral";

import Video from "../../components/video/Video";
import { getVideosByChannel } from "../../redux/actions/videosAction";
import { getChannelDetails } from "../../redux/actions/channelAction";
import "./_channelScreen.scss";

const ChannelScreen = ({
  getVideosByChannel,
  getChannelDetails,
  channelVideos,
  loading,
  channel,
}) => {
  const { channelId } = useParams();
  const { snippet, statistics } = channel;
  useEffect(() => {
    getVideosByChannel(channelId);
    getChannelDetails(channelId);
  }, [getVideosByChannel, getChannelDetails, channelId]);
  console.log("Channel", snippet);

  return (
    <>
      <div className="px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader">
        <div className="d-flex align-items-center channelHeader_details">
          <img src={snippet?.thumbnails?.default?.url} alt="" />

          <div className="ml-3 ">
            <h3>{snippet?.title}</h3>
            <span>
              {numeral(statistics?.subscriberCount).format("0.a")} subscribers
            </span>
          </div>
        </div>

        <button>Subscribe</button>
      </div>
      <Container>
        <Row className="mt-2">
          {!loading
            ? channelVideos?.map((video) => (
                <Col md={4} lg={3}>
                  <Video video={video} channelScreen />
                </Col>
              ))
            : [...Array(15)].map(() => (
                <Col md={4} lg={3}>
                  <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                    <Skeleton width="100%" height="14 0px" count={20} />
                  </SkeletonTheme>
                </Col>
              ))}
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  channelVideos: state.channelVideos.videos,
  loading: state.channelVideos.loading,
  channel: state.channelDetails.channel,
});

export default connect(mapStateToProps, {
  getVideosByChannel,
  getChannelDetails,
})(ChannelScreen);
