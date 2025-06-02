import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Heading } from "@/components/ui/heading";
import { BankCard } from "@/components/gift/bank-card";

export const Gift = () => {
  return (
    <SectionWrapper className="mx-auto max-w-2xl">
      <Heading
        title="Wedding Gift"
        description="Bagi Bapak/Ibu/Saudara/i yang mengirimkan hadiah pernikahan secara cashless, dapat mengirim ke rekening mempelai berikut"
        className="mb-8"
      />
      <div className="mx-auto grid max-w-2xl grid-cols-2">
        <BankCard
          bankName="BCA"
          accountNumber="7900773115"
          accountHolder="Muhammad Harliansyah Wardana"
          imgSrc="/assets/bca.webp"
        />
        <BankCard
          bankName="Bank Jatim"
          accountNumber="1852054723"
          accountHolder="Muhammad Harliansyah Wardana"
          imgSrc="/assets/bank-jatim.jpg"
        />
      </div>
    </SectionWrapper>
  );
};
