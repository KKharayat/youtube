import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import Video from "../../components/video/Video";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videosAction";
import SkeletonVideo from "../../components/skeleton/SkeletonVideo";

const HomeScreen = ({ getPopularVideos, videos, activeCategory, loading }) => {
  useEffect(() => {
    getPopularVideos();
  }, [getPopularVideos]);

  const fetchData = () => {
    if (activeCategory === "All") getPopularVideos();
    else {
      getVideosByCategory(activeCategory);
    }
  };

  return (
    <div>
      <Container>
        <CategoriesBar />

        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={
            <div className="spinner-border text-danger d-block mx-auto"></div>
          }
          className="row"
        >
          {!loading
            ? videos.map((video) => (
                <Col key={video.id} lg={3} md={4}>
                  <Video video={video} />
                </Col>
              ))
            : [...Array(20)].map(() => (
                <Col lg={3} md={4}>
                  <SkeletonVideo />
                </Col>
              ))}
        </InfiniteScroll>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  videos: state.homeVideos.videos,
  activeCategory: state.homeVideos.activeCategory,
  loading: state.homeVideos.loading,
});

export default connect(mapStateToProps, {
  getPopularVideos,
  getVideosByCategory,
})(HomeScreen);
