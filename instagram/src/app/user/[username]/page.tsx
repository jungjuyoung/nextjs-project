import { getUserForProfile } from "@/service/user";
import notFoundPage from "./404";
import UserProfile from "@/app/components/UserProfile";

type Props = {
  params: { username: string };
};
const userPage = async ({ params: { username } }: Props) => {
  // 상단: 사용자의 프로필 (username, name, 팔로워 숫자)
  // 하단: 3개의 탭(posts, bookmark, likes)
  const user = await getUserForProfile(username);
  if (!user) notFoundPage();
  return <UserProfile user={user} />;
};

export default userPage;
