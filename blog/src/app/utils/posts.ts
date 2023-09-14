import { readFile } from "fs/promises";
import path from "path";

export interface Post {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string
  featured: boolean
}
export interface PostData extends Post {
  content: string
  next: Post | null
  prev: Post | null
}

export function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() // 아래에서 정의한 모든 포스트를 가져와서 featured된것만 필터링
    .then(posts => posts.filter(post => post.featured))
}

export function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() // 아래에서 정의한 모든 포스트를 가져와서 Non Featured된것만 필터링
    .then(posts => posts.filter(post => !post.featured))
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json')
  return readFile(filePath, 'utf-8').then<Post[]>(JSON.parse).then(posts => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  const posts = await getAllPosts();
  const post = posts.find(post => post.path === fileName);
  console.log('getPostData post', post)

  if (!post) throw new Error(`${fileName}에 해당하는 포스트가 없습니다.`);

  const index = posts.indexOf(post)
  // console.log(index) // 2
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;
  const content = await readFile(filePath, 'utf-8')
  return {
    ...post,
    content, next, prev
  }
}