import React from "react";
import "./_comment.scss";
import moment from "moment";

const Comment = () => {
  return (
    <div className="p-2 comment d-flex">
      <img
        src="https://image.flaticon.com/icons/png/512/147/147144.png"
        alt=""
        className="rounded-circle "
      />
      <div className="comment_body">
        <p className=" comment_header">
          authorDisplayName • {moment("2020-02-1").fromNow()}
        </p>
        <p className="mb-0">textDisplay</p>
      </div>
    </div>
  );
};

export default Comment;
