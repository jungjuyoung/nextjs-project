import { getServerSession } from "next-auth";
import FollowingsBar from "./components/FollowingsBar";
import PostLists from "./components/PostLists";
import SideBar from "./components/SideBar";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  // console.log("HomePage user", user);
  if (!user) {
    redirect("/auth/signin");
  }
  return (
    <section className="w-full flex flex-col md:flex-row max-w-[850px] p-4">
      <div className="w-full basis-3/4 min-w-0">
        <FollowingsBar />
        <PostLists />
      </div>
      <div className="basis-1/4 ml-8">
        <SideBar user={user} />
      </div>
    </section>
  );
}
