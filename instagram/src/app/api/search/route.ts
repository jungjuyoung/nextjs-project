import { searchUsers } from "@/service/user";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic' // 빌드시 ssg로 랜덩링 되는 페이지를 ssr로 만드는 것.

export async function GET() {
  return searchUsers().then(res => NextResponse.json(res))
}