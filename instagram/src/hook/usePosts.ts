
import { SimplePost } from '@/model/post';
import useSWR, { useSWRConfig } from 'swr';

export default function usePosts() {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>('/api/posts');
  const { mutate } = useSWRConfig();
  const setLike = (post: SimplePost, username: string, liked: boolean) => {

    fetch("/api/likes", {
      method: "PUT",
      body: JSON.stringify({ id: post.id, liked }),
    }).then(() => mutate("/api/posts"));
  }
  return { posts, isLoading, error, setLike };
}