import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { dislikePost, likePost } from "@/service/posts";

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) return new Response('Authentication Error', { status: 401 });

  const { id, liked } = await req.json()
  if (!id || liked === undefined) return new Response('Bad request', { status: 400 });
  const request = liked ? likePost : dislikePost;
  return request(id, user.id).then(res => NextResponse.json(res)).catch(err => new Response(JSON.stringify(err), { status: 500 }))
}