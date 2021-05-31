import React from "react";

import { AiFillEye } from "react-icons/ai";
import request from "../../api";

import { LazyLoadImage } from "react-lazy-load-image-component";

import moment from "moment";
import numeral from "numeral";

import { Col, Row } from "react-bootstrap";

import "./_videoHorizontal.scss";

const VideoHorizontal = () => {
  const seconds = moment.duration("100").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <Row className="py-2 m-1 videoHorizontal align-items-center">
      <Col xs={6} md={4} className="videoHorizontal_left">
        <LazyLoadImage
          src="https://image.flaticon.com/icons/png/512/147/147144.png"
          effect="blur"
          className="videoHorizontal_thumbnail"
          wrapperClassName="videoHorizontal_thumbnail-wrapper"
        />
        <span className="video_top_duration">{_duration}</span>
      </Col>
      <Col xs={6} md={4} className="videoHorizontal_right p-0">
        <p className="videoHorizontal_title mb-1">Title </p>
        <div className="videoHorizontal_details">
          <AiFillEye /> {numeral(100).format("0.a")} Views •
          {moment("2022-04-9").fromNow()}
        </div>
        <div className="videoHorizontal_channel d-flex align-items-center my-1">
          {/* <LazyLoadImage
          src="https://image.flaticon.com/icons/png/512/147/147144.png"
          effect="blur"
          className="videoHorizontal_thumbnail"
          wrapperClassName="videoHorizontal_thumbnail-wrapper"
        /> */}
          <p>Name Of Channel</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
