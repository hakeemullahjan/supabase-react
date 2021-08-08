import "./App.css";
import { useState, useEffect } from "react";
import { supabase } from "./client";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: "", content: "" });
  const { title, content } = post;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data } = await supabase.from("posts").select();
    console.log("data", data);
    if (data) {
      setPosts(data);
    }
  };

  const createPost = async () => {
    await supabase.from("posts").insert([{ title, content }]);
    setPost({ title: "", content: "" });
    fetchPosts();
  };

  return (
    <div className="App">
      <input
        placeholder="title"
        value={title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <input
        placeholder="content"
        value={content}
        onChange={(e) => setPost({ ...post, content: e.target.value })}
      />
      <button onClick={createPost}>create Post</button>

      {posts.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
