import style from './Post.module.css';
import { AiFillLike } from 'react-icons/ai';
import { FaShareSquare, FaComment } from 'react-icons/fa';
import Particles from './Particles/Particles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Comment from '../../connect/Comment';
import Share from '../../connect/Share';

export function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [choice, setChoice] = useState('');
  const [selectedComments, setSelectedComments] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const navigate = useNavigate();

  const FetchPost = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://portfolio-backend-v0hd.onrender.com/Portfolio/Post');
      if (!res.ok) {
        console.error('Database not responding');
        return;
      }
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error('❌ Error fetching posts: ', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchPost();
  }, []);

  const getImageSrc = (img) => {
    if (!img?.data?.data || !img?.contentType) return '';
    const base64String = btoa(
      new Uint8Array(img.data.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
    return `data:${img.contentType};base64,${base64String}`;
  };

  const formattedDate = (value) => {
    if (!value) return 'Today';
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? 'Today' : date.toLocaleDateString();
  };

  const handleCommentClick = (post) => {
    if (choice === 'Comment' && selectedPostId === post._id) {
      setChoice('');
      setSelectedComments([]);
      setSelectedPostId(null);
    } else {
      setChoice('Comment');
      setSelectedComments(post.comments || []);
      setSelectedPostId(post._id);
    }
  };

  const handleShareClick = (post) => {
    setChoice('Share');
    setSelectedComments(post.comments || []);
    setSelectedPostId(post._id);
  };

  return (
    <div className={style.main_container}>
      <Particles />

      <section className={style.page_header}>
        <div>
          <p className={style.sub_title}>Community Feed</p>
          <h1 className={style.page_title}>A modern feed for your latest updates and ideas.</h1>
        </div>
        <button onClick={() => navigate('/AddPost')} className={style.primary_button}>
          Create Post
        </button>
      </section>

      {loading ? (
        <div className={style.loaderContainer}>
          <div className={style.loader}></div>
          <p>Loading posts...</p>
        </div>
      ) : posts.length === 0 ? (
        <div className={style.emptyState}>
          <h2>No posts available yet.</h2>
          <p>Share your first update with the community.</p>
        </div>
      ) : (
        posts.map((post, index) => {
          const imageSrc = getImageSrc(post.img);
          return (
            <div key={post._id || index} className={style.card_container}>
              <article className={style.card}>
                <div className={style.card_header}>
                  <div className={style.author_info}>
                    <div className={style.avatar}>
                      {post.author ? post.author.charAt(0).toUpperCase() : 'P'}
                    </div>
                    <div>
                      <p className={style.author_name}>{post.author || 'Portfolio Community'}</p>
                      <p className={style.post_meta}>{formattedDate(post.createdAt)}</p>
                    </div>
                  </div>
                </div>

                {imageSrc ? (
                  <div className={style.media_preview}>
                    <img src={imageSrc} className={style.img} alt="Post visual" />
                  </div>
                ) : (
                  <div className={style.media_fallback}>
                    No visual content available.
                  </div>
                )}

                <div className={style.post_content}>
                  <div className={style.post_heading}>Description</div>
                  <p className={style.post_text}>
                    {post.description || 'Share what matters most to you — milestones, lessons, or ideas that inspire others.'}
                  </p>
                </div>

                <div className={style.interaction_row}>
                  <button className={style.action_button}>
                    <AiFillLike />
                    <span>Like</span>
                  </button>
                  <button className={style.action_button} onClick={() => handleCommentClick(post)}>
                    <FaComment />
                    <span>Comment</span>
                  </button>
                  <button className={style.action_button} onClick={() => handleShareClick(post)}>
                    <FaShareSquare />
                    <span>Share</span>
                  </button>
                </div>
              </article>
            </div>
          );
        })
      )}

      {choice === 'Comment' && selectedPostId ? (
        <Comment comments={selectedComments} postId={selectedPostId} />
      ) : choice === 'Share' ? (
        <Share />
      ) : null}
    </div>
  );
}
