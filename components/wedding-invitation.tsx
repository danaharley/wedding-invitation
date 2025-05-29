import { Cover } from "@/components/cover";
import { Welcome } from "@/components/welcome";
import { GettingMerried } from "@/components/getting-merried";
import { SaveTheDate } from "@/components/save-the-date";
import { OurStory } from "@/components/our-story";
import { Venue } from "@/components/venue";
import { Gallery } from "@/components/gallery";
import { Gift } from "@/components/gift";
import { Wish } from "@/components/wish";
import { AudioPlayer } from "@/components/audio-player";
import { User } from "@/app/generated/prisma";

type Props = {
  user: User;
};

export const WeddingInvitation = ({ user }: Props) => {
  return (
    <>
      <Cover user={user} />
      <Welcome />
      <GettingMerried />
      <SaveTheDate />
      <Venue />
      <OurStory />
      <Gallery />
      <Gift />
      <Wish user={user} />
      <AudioPlayer />
    </>
  );
};
