import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Heading } from "@/components/ui/heading";
import { WishForm } from "@/components/wish/wish-form";
import { WishCard } from "@/components/wish/wish-card";

import { getWeddingMessages } from "@/lib/message";

import { User, WeddingMessage } from "@/app/generated/prisma";

type Props = {
  user: User;
};

type MessageWithUser = WeddingMessage & {
  user: User;
};

export const Wish = async ({ user }: Props) => {
  const messages = (await getWeddingMessages()) as MessageWithUser[] | null;

  return (
    <SectionWrapper>
      <Heading
        title="Wedding Wishes"
        description="Ucapan selamat dan kebahagiaan bisa dari mana saja. Tanpa berjabat tangan atau pelukan hangat, masih ada simpul senyum dan doa baik yang kami harapkan"
        className="mb-8"
      />
      <WishForm user={user} />
      {/* <div className="mx-auto mt-16 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 2xl:max-w-7xl">
        <WishCard messages={messages} />
      </div> */}
      <div className="mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:max-w-7xl">
        <WishCard messages={messages} />
      </div>
      <div>
        {messages && messages.length === 0 && (
          <div className="flex items-center justify-center">
            <Heading
              title="No Messages"
              className="text-lg font-sans md:text-xl"
            />
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};
