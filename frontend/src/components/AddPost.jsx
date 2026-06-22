import { useState } from 'react';
import style from './AddPost.module.css';
import { useNavigate } from 'react-router-dom';

export function AddPost() {
  const [description, setDescription] = useState('');
  const [file, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description || !file) {
      setMessage("❌ Please fill all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("description", description);
    formData.append("image", file);

    try {
      const response = await fetch("https://portfolio-backend-v0hd.onrender.com/Portfolio/Post", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("✅ Post uploaded successfully!");
        setDescription('');
        setImage(null);
        navigate("/Post");
      } else {
        setMessage("❌ Failed to upload post.");
      }
    } catch (error) {
      console.error("❌ Upload error:", error);
      setMessage("❌ Server error occurred.");
    }
  };

  return (
    <div className={style.container}>
      <h2 className={style.heading}>Create New Post</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <textarea
          placeholder="Write your description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={style.textarea}
          rows={5}
        ></textarea>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className={style.input}
        />

        <button type="submit" className={style.button}>Upload Post</button>
        {message && <p className={style.message}>{message}</p>}
      </form>
    </div>
  );
}
