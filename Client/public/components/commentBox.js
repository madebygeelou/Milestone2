import React, { useState, useEffect } from 'react';

const CommentBox = () => {
  const [videoLink, setVideoLink] = useState('');
  const [userName, setUserName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  // Fetch comments when the component mounts
  useEffect(() => {
    fetch('http://localhost:3000/controllers/youtube_controller')
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error('Error fetching comments:', error));
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      videoLink,
      userName,
      text: commentText,
      timeStamp: new Date().toLocaleString(),
      likes: 0,
      dislikes: 0,
    };

    fetch('http://localhost:3000/controllers/youtube_controller', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((comment) => {
        setComments([...comments, comment]);
        setVideoLink('');
        setUserName('');
        setCommentText('');
      })
      .catch((error) => console.error('Error adding comment:', error));
  };

  // Handle comment deletion
  const handleDelete = (commentId) => {
    fetch(`http://localhost:3000/controllers/youtube_controller/${commentId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setComments(comments.filter((comment) => comment.id !== commentId));
        } else {
          console.error('Failed to delete comment');
        }
      })
      .catch((error) => console.error('Error deleting comment:', error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="video-link"
          placeholder="Video Link"
          required
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
        />
        <input
          type="text"
          id="user-name"
          placeholder="Your Name"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <textarea
          id="comment-text"
          placeholder="Your Comment"
          required
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button type="submit">Add Comment</button>
      </form>
      <div id="comments">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>
              <strong>{comment.userName}</strong> ({comment.timeStamp}):
            </p>
            <p>{comment.text}</p>
            <p>
              Likes: {comment.likes}, Dislikes: {comment.dislikes}
            </p>
            <button onClick={() => handleDelete(comment.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentBox;

