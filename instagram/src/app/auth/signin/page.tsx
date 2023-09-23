import { handler } from "@/app/api/auth/[...nextauth]/route";
import { Signin } from "@/app/components/Signin";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};
const SigninPage = async ({ searchParams: { callbackUrl } }: Props) => {
  const session = await getServerSession(handler);
  if (session) {
    redirect("/");
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex justify-center mt-[50px]">
      <Signin providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
};

export default SigninPage;
