import { getServerSession } from "next-auth";
import FollowingsBar from "./components/FollowingsBar";
import PostLists from "./components/PostLists";
import SideBar from "./components/SideBar";
import { handler } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await getServerSession(handler);
  const user = session?.user;
  if (!user) {
    redirect("/auth/signin");
  }
  return (
    <section>
      <FollowingsBar />
      <PostLists />
      <SideBar user={user} />
    </section>
  );
}
