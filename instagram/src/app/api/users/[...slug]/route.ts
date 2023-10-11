import { getPostOf, getSavedPostsOf, getlikedPostsOf } from '@/service/posts';
import { NextRequest, NextResponse } from 'next/server';
type Context = {
  params: {
    slug: string[]
  }
}
export async function GET(_: NextRequest, context: Context) {
  const { slug } = context.params
  if (!slug || !Array.isArray(slug) || slug.length < 2) {
    return new NextResponse('Bad request', { status: 400 })
  }
  const [username, query] = slug
  let request = getPostOf;
  if (query === 'saved') {
    request = getSavedPostsOf
  } else if (query === 'liked') {
    request = getlikedPostsOf
  }
  return request(username).then(data => NextResponse.json(data))
}
