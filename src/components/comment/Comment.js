import React from "react";
import "./_comment.scss";
import moment from "moment";

const Comment = ({ comment }) => {
  const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } =
    comment;
  return (
    <div className="p-2 comment d-flex">
      <img src={authorProfileImageUrl} alt="" className="rounded-circle " />
      <div className="comment_body">
        <p className=" comment_header">
          {authorDisplayName} • {moment(publishedAt).fromNow()}
        </p>
        <p className="mb-0">{textDisplay}</p>
      </div>
    </div>
  );
};

export default Comment;
