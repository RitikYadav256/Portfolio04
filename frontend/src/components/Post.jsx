import style from './Post.module.css';
import { AiFillLike } from "react-icons/ai";
import { FaShareSquare, FaComment } from "react-icons/fa";
import Particles from './Particles/Particles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Comment from '../../connect/Comment';
import Share from '../../connect/Share';

export function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [choice, setChoice] = useState("");
  const [selectedComments, setSelectedComments] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const navigate = useNavigate();

  const FetchPost = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5001/Portfolio/Post");
      if (!res.ok) {
        console.log("Database not responding");
        return;
      }
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.log("❌ Error fetching posts: ", err);
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
      new Uint8Array(img.data.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ''
      )
    );
    return `data:${img.contentType};base64,${base64String}`;
  };

  const handleCommentClick = (post) => {
    if (choice === "Comment" && selectedPostId === post._id) {
      setChoice("");
      setSelectedComments([]);
      setSelectedPostId(null);
    } else {
      setChoice("Comment");
      setSelectedComments(post.comments || []);
      setSelectedPostId(post._id);
    }
  };

  return (
    <div className={style.main_container}>
      <Particles />
      <div className={style.heading}>
        <div className={style.details}>
          Now it’s your moment to shine and showcase your expertise—click here to craft a compelling post that shares your insights and inspires the community!
        </div>
        <div className={style.post_button}>
          <button onClick={() => navigate("/AddPost")} className={style.button1}>Add Post</button>
        </div>
      </div>

      {loading ? (
        <div className={style.loaderContainer}>
          <div className={style.loader}></div>
          <p>Loading posts...</p>
        </div>
      ) : (
        posts.map((post, index) => (
          <div key={index} className={style.card_container}>
            <div className={style.card}>
              
              <div className={style.post}>
                <img
                  src={getImageSrc(post.img)}
                  className={style.img}
                  alt="post"
                />
                
              </div>
              <div className={style.post_heading}>
                <div className={style.disc}><ul>Description: </ul> </div>
                {post.description || "I am excited to share that I have done a post"}
              </div>
              <div className={style.connect}>
                  <div onClick={() => setChoice("Share")} className={style.share}>
                    <FaShareSquare />
                  </div>
                  <div onClick={() => handleCommentClick(post)} className={style.comment}>
                    <FaComment />
                  </div>
                </div>
            </div>
          </div>
        ))
      )}

      {choice === "Comment" && selectedPostId ? (
        <Comment comments={selectedComments} postId={selectedPostId} />
      ) : choice === "Share" ? (
        <Share />
      ) : null}
    </div>
  );
}
