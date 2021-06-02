import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import VideoHorizontal from "../components/videoHorizontal/VideoHorizontal";
import { getVideosBySearch } from "../redux/actions/videosAction";

const SearchScreen = ({ getVideosBySearch, searchVideos, loading }) => {
  const { query } = useParams();
  useEffect(() => {
    getVideosBySearch(query);
  }, [query, getVideosBySearch]);
  return (
    <Container>
      {!loading ? (
        searchVideos?.map((video) => (
          <VideoHorizontal video={video} key={video.id.videoId} searchScreen />
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
  searchVideos: state.searchVideos.videos,
  loading: state.searchVideos.loading,
});

export default connect(mapStateToProps, {
  getVideosBySearch,
})(SearchScreen);
