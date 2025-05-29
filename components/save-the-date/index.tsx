import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Heading } from "@/components/ui/heading";
import { CountdownTimer } from "@/components/save-the-date/countdown-timer";

export const SaveTheDate = () => {
  return (
    <SectionWrapper>
      <Heading title="Save the date" className="pt-8" />
      <CountdownTimer />
    </SectionWrapper>
  );
};
