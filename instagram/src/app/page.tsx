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
    <section className="w-full flex flex-col md:flex-row max-w-[850px] p-4">
      <div className="w-full basis-3/4">
        <FollowingsBar />
        <PostLists />
      </div>
      <div className="basis-1/4">
        <SideBar user={user} />
      </div>
    </section>
  );
}
