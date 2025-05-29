import { redirect } from "next/navigation";

import { WeddingInvitation } from "@/components/wedding-invitation";

import { getUserByGroup, getUsers } from "@/lib/user";

type Props = {
  params: Promise<{ group: string }>;
  searchParams: Promise<{ to: string }>;
};

export async function generateStaticParams() {
  const users = await getUsers();

  if (!users || !users.length) {
    return [];
  }

  return users.map((user) => ({
    group: user.group,
    user: user.name,
  }));
}

export default async function GroupPage({ params, searchParams }: Props) {
  const { group } = await params;
  const { to } = await searchParams;

  const user = await getUserByGroup(group, to);

  if (!user) {
    redirect("/");
  }

  return <WeddingInvitation user={user!} />;
}
