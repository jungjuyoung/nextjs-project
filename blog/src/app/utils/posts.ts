import { readFile } from "fs/promises";
import path from "path";

export interface Posts {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string
  featured: boolean
}

export function getFeaturedPosts(): Promise<Posts[]> {
  return getAllPosts() // 아래에서 정의한 모든 포스트를 가져와서 featured된것만 필터링
    .then(posts => posts.filter(post => post.featured))
}

export function getNonFeaturedPosts(): Promise<Posts[]> {
  return getAllPosts() // 아래에서 정의한 모든 포스트를 가져와서 Non Featured된것만 필터링
    .then(posts => posts.filter(post => !post.featured))
}

export async function getAllPosts(): Promise<Posts[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json')
  return readFile(filePath, 'utf-8').then<Posts[]>(JSON.parse).then(posts => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
}