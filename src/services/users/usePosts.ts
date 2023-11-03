import { useEffect, useState } from "react";
import { transformedPost } from "./utils";
import { fetchPosts } from "./api";
import { Post } from "../../models/Post";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await fetchPosts();
      console.log("resultPosts", result);
      const transformed = result.products.map(transformedPost);
      setPosts(transformed);
      setLoading(false);
    })();
  }, []);

  const deletePost = (id: number) => {
    const nextPosts = posts.filter((post) => post.id !== id);
    setPosts(nextPosts);
  };

  return { posts, loading, setPosts, deletePost };
};
