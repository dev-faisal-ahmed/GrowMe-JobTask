import { useState } from "react";
import { PostType } from "../utils/types";

export function useGetPosts() {
  const [posts, setPosts] = useState<PostType[]>([]);

  async function fetchPosts() {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  }

  return { posts, fetchPosts };
}
