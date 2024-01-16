import { useState } from "react";
import { PostType } from "../utils/types";

export function useGetPosts() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchPosts() {
    try {
      setLoading(true);
      const url = `https://jsonplaceholder.typicode.com/posts`;
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data);
    } finally {
      setLoading(false);
    }
  }

  return { posts, loading, fetchPosts };
}
