import { SimplePost } from '@/model/post';
import useSWR from 'swr';

async function updateLike(id: string, liked: boolean) {
  return fetch("/api/likes", {
    method: "PUT",
    body: JSON.stringify({ id, liked }),
  }).then(res => res.json())
}

export default function usePosts() {
  const { data: posts, isLoading, error, mutate } = useSWR<SimplePost[]>('/api/posts');
  console.log('posts', posts)
  const setLike = (post: SimplePost, username: string, liked: boolean) => {
    const newPost = {
      ...post, likes: liked ? [...post.likes, username] : post.likes.filter(p => p !== username)
    }
    const newPosts = posts?.map(p => (p.id === post.id ? newPost : p))

    return mutate(updateLike(post.id, liked), {
      optimisticData: newPosts,
      populateCache: false,
      revalidate: false,
      rollbackOnError: true
    })
  }

  return { posts, isLoading, error, setLike };
}