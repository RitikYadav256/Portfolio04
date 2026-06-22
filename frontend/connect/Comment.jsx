import React, { useState, useEffect } from 'react';
import styles from './Comment.module.css';
import { useNavigate } from 'react-router-dom';
import { ImCross } from "react-icons/im";

const Comment = ({ comments: initialComments = [], postId }) => {
  const [comments, setComments] = useState(initialComments);
  const [newName, setNewName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setComments(initialComments);
  }, [initialComments]);

  const handleAddComment = async () => {
    if (!newName.trim() || !newComment.trim()) {
      alert('Please enter your name and comment.');
      return;
    }

    const newEntry = {
      _id: postId,
      name: newName.trim(),
      comment: newComment.trim(),
    };

    setLoading(true);
    try {
      const res = await fetch('https://portfolio-backend-v0hd.onrender.com/Portfolio/Post/Comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEntry),
      });

      if (!res.ok) {
        throw new Error('Failed to post comment');
      }

      setComments([newEntry, ...comments]);
      setNewName('');
      setNewComment('');
      window.location.href = '/Post'; // or navigate('/Post');
    } catch (error) {
      console.error('Error posting comment:', error);
      alert('Failed to post comment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles['comment-container']}>
      <div className={styles.Exit}>
        <h2 className={styles['comment-heading']}>Comments</h2>
        <h2 className={styles.ExitButton}>
          <button onClick={() => window.location.href = '/Post'}><ImCross /></button>
        </h2>
      </div>

      <h3 className={styles.recent}>Recent.............</h3>

      <div className={styles['comment-list']}>
        {comments.length === 0 && <p>No comments yet. Be the first!</p>}
        {comments.map((item, index) => {
          // Safely handle missing or malformed data
          if (!item || typeof item !== 'object') return null;
          return (
            <div
              key={index}
              className={styles['comment-box']}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <strong className={styles.commentby}>{item.name || 'Anonymous'}</strong>
              <p className={styles.comment}>{item.comment || ''}</p>
            </div>
          );
        })}
      </div>

      <div className={styles['comment-input-section']}>
        <input
          type="text"
          placeholder="Your name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className={styles['comment-input']}
          disabled={loading}
        />
        <textarea
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className={styles['comment-textarea']}
          disabled={loading}
        />
        <button
          onClick={handleAddComment}
          className={styles['comment-button']}
          disabled={loading}
        >
          {loading ? 'Posting...' : 'Post Comment'}
        </button>
      </div>
    </div>
  );
};

export default Comment;
