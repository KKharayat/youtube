import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Comment from "../comment/Comment";
import "./_comments.scss";
import {
  getCommentsOfVideoById,
  addComment,
} from "../../redux/actions/commentsAction";

const Comments = ({
  totalComments,
  videoId,
  getCommentsOfVideoById,
  comments,
  addComment,
  user: { photoURL },
}) => {
  useEffect(() => {
    getCommentsOfVideoById(videoId);
  }, [getCommentsOfVideoById, videoId]);

  const [text, setText] = useState("");

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  const handleComment = (e) => {
    console.log("Dekho", text);
    e.preventDefault();
    if (text.length === 0) return;
    addComment(videoId, text);
    setText("");
  };
  return (
    <div className="comments">
      <p>{totalComments} Comments</p>
      <div className="my-2 comments_form d-flex w-100">
        <img src={photoURL} alt="avatar" className="mr-3 rounded-circle" />
        <form onSubmit={handleComment} className="d-flex flex-grow-1 ">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="p-2 border-0">Comment</button>
        </form>
      </div>
      <div className="comments_list">
        {_comments?.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth?.user,
  comments: state.commentList.comments,
});

export default connect(mapStateToProps, { getCommentsOfVideoById, addComment })(
  Comments
);
