import { getServerSession } from 'next-auth'
import { getUserByUsername } from '@/service/user';
import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { getFollowingPostsOf } from '@/service/posts';

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    return new Response('Authentication Eerror', { status: 401 })
  }
  return getFollowingPostsOf(user.username).then(res => NextResponse.json(res))
}