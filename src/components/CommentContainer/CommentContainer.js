import React, { useState, useEffect } from "react";
import CommentBox from "../CommentBox/CommentBox";

const CommentContainer = ({ post }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=" + post.id)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [post.id]);

  return (
    <>
      {comments.map((comment) => (
        <CommentBox key={comment.id} comment={comment} />
      ))}
    </>
  );
};

export default CommentContainer;
