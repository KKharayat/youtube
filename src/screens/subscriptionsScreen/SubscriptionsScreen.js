import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { connect } from "react-redux";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import { getSubscribedChannels } from "../../redux/actions/videosAction";
import "./_subscriptionsScreen.scss";

const SubscriptionsScreen = ({
  getSubscribedChannels,
  subscribedVideos,
  loading,
}) => {
  useEffect(() => {
    getSubscribedChannels();
  }, [getSubscribedChannels]);
  return (
    <Container fluid>
      {!loading ? (
        subscribedVideos?.map((video) => (
          <VideoHorizontal video={video} key={video.id} subsScreen />
        ))
      ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="160px" count={20} />
        </SkeletonTheme>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  subscribedVideos: state.subscriptionsChannel.videos,
  loading: state.subscriptionsChannel.loading,
});

export default connect(mapStateToProps, { getSubscribedChannels })(
  SubscriptionsScreen
);
