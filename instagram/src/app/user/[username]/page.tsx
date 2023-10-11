import { getUserForProfile } from "@/service/user";
import notFoundPage from "./404";
import UserProfile from "@/app/components/UserProfile";
import UserPosts from "@/app/components/UserPosts";
import { Metadata } from "next";
import { cache } from "react";

type Props = {
  params: { username: string };
};

const getUser = cache(async (username: string) => getUserForProfile(username));

const userPage = async ({ params: { username } }: Props) => {
  const user = await getUser(username);

  if (!user) notFoundPage();
  return (
    <section className="w-full">
      <UserProfile user={user} />
      <UserPosts user={user} />
    </section>
  );
};

export default userPage;

export async function generateMetadata({
  params: { username },
}: Props): Promise<Metadata> {
  const user = await getUser(username);
  return {
    title: `${user?.name} (@${user?.username}) ﹒ instagram photos`,
    description: `${user?.name}'s all instagram posts`,
  };
}
