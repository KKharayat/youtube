import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import Comments from "../../components/comments/Comments";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import "./_watchScreen.scss";
import {
  getVideoById,
  getRelatedVideos,
} from "../../redux/actions/videosAction";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const WatchScreen = ({
  getVideoById,
  selectedVideo,
  loading,
  getRelatedVideos,
  relatedVideos,
  relatedVideoLoading,
}) => {
  const { id } = useParams();

  useEffect(() => {
    getVideoById(id);
    getRelatedVideos(id);
  }, [getVideoById, id]);

  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen_player">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            src={`https://www.youtube.com/embed/${id}`}
          ></iframe>
        </div>
        {!loading ? (
          <VideoMetaData selectedVideo={selectedVideo} videoId={id} />
        ) : (
          <h6>Loading....</h6>
        )}

        <Comments
          videoId={id}
          totalComments={selectedVideo?.statistics?.commentCount}
        />
      </Col>
      <Col lg={4}>
        {!relatedVideoLoading ? (
          relatedVideos
            ?.filter((video) => video.snippet)
            .map((video) => {
              return <VideoHorizontal video={video} key={video.id.videoId} />;
            })
        ) : (
          <SkeletonTheme color="#343a40" highlightColor="#3c4147">
            <Skeleton width="100%" height="130px" count={15} />
          </SkeletonTheme>
        )}
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  selectedVideo: state.selectedVideo.video,
  loading: state.selectedVideo.loading,
  relatedVideos: state.relatedVideos.videos,
  relatedVideoLoading: state.relatedVideos.loading,
});

export default connect(mapStateToProps, { getVideoById, getRelatedVideos })(
  WatchScreen
);
