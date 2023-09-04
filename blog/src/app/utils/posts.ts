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
export async function getAllPosts(): Promise<Posts[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json')
  return readFile(filePath, 'utf-8').then<Posts[]>(JSON.parse).then(posts => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
}