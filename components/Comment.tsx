// CommentBox.tsx
'use client'
import React, { useState } from 'react';

const CommentBox: React.FC = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle comment submission logic here
    console.log('Comment submitted:', comment);
  };

  return (
    <form onSubmit={handleCommentSubmit}>
      <label htmlFor="comment">Your Comment:</label>
      <textarea
        id="comment"
        value={comment}
        onChange={handleCommentChange}
        rows={4}
        cols={50}
      />
      <button type="submit">Submit Comment</button>
    </form>
  );
};

export default CommentBox;

