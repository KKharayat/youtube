import React from "react";
import Comment from "../comment/Comment";
import "./_comments.scss";

const Comments = () => {
  const handleComment = () => {
    // e.preventDefault()
    // if (text.length === 0) return
    // dispatch(addComment(videoId, text))
    // setText('')
  };

  return (
    <div className="comments">
      <p>100 Comments</p>
      <div className="my-2 comments_form d-flex w-100">
        <img
          src="https://image.flaticon.com/icons/png/512/147/147144.png"
          alt="avatar"
          className="mr-3 rounded-circle"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1 ">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
            //  value={text}
            //  onChange={e => setText(e.target.value)}
          />
          <button className="p-2 border-0">Comment</button>
        </form>
      </div>
      <div className="comments_list">
        {[...Array(15)].map(() => (
          <Comment />
        ))}
      </div>
    </div>
  );
};

export default Comments;
