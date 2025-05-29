import { User } from "../generated/prisma";

import { WeddingInvitation } from "@/components/wedding-invitation";

export default async function Home() {
  const user: User = {
    id: 0,
    group: "Public",
    name: "Tamu Undangan",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return <WeddingInvitation user={user} />;
}
