import React, { useState, useEffect } from "react";

import { AiFillEye } from "react-icons/ai";
import request from "../../api";

import { LazyLoadImage } from "react-lazy-load-image-component";

import moment from "moment";
import numeral from "numeral";

import { useHistory } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import "./_videoHorizontal.scss";

const VideoHorizontal = ({ video, searchScreen, subsScreen }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      resourceId,
      thumbnails: { medium },
    },
  } = video;

  //to Check if video is of which kind
  const isVideo = !(id.kind === "youtube#channel" || subsScreen);
  const thumbnail = !isVideo && "videoHorizontal_thumbnail-channel";

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails, statistics",
          id: id.videoId,
        },
      });

      console.log(items);
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    if (isVideo) {
      get_video_details();
    }
  }, [id, isVideo]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  //channel id for subscription Screen
  const _channelId = resourceId?.channelId || channelId;

  const history = useHistory();

  const handleClick = () => {
    {
      isVideo
        ? history.push(`/watch/${id.videoId}`)
        : history.push(`/channel/${_channelId}`);
    }
  };

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <Row
      className="py-2 m-1 videoHorizontal align-items-center"
      onClick={handleClick}
    >
      <Col
        xs={6}
        md={searchScreen || subsScreen ? 4 : 6}
        className="videoHorizontal_left"
      >
        <LazyLoadImage
          src={medium.url}
          effect="blur"
          className="videoHorizontal_thumbnail"
          wrapperClassName={`videoHorizontal_thumbnail-wrapper ${thumbnail}`}
        />
        {isVideo && (
          <span className="videoHorizontal_duration">{_duration}</span>
        )}
      </Col>
      <Col
        xs={6}
        md={searchScreen || subsScreen ? 8 : 6}
        className="videoHorizontal_right p-0"
      >
        <p className="videoHorizontal_title mb-1">{title} </p>
        {isVideo && (
          <div className="videoHorizontal_details">
            <AiFillEye /> {numeral(views).format("0.a")} Views •
            {moment(publishedAt).fromNow()}
          </div>
        )}
        {(searchScreen || subsScreen) && (
          <p className="mt-1 videoHorizontal_desc">{description}</p>
        )}
        <div className="videoHorizontal_channel d-flex align-items-center my-1">
          {isVideo && (
            <LazyLoadImage
              src={channelIcon?.url}
              effect="blur"
              className="videoHorizontal_thumbnail"
              wrapperClassName="videoHorizontal_thumbnail-wrapper"
            />
          )}
          <p className="mb-0">{channelTitle}</p>
        </div>
        {subsScreen && (
          <p className="mt-2">{video.contentDetails.totalItemCount}</p>
        )}{" "}
        Videos
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
