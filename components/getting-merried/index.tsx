import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Heading } from "@/components/ui/heading";
import { WeddingCouple } from "@/components/getting-merried/wedding-couple";

import { siteConfig } from "@/config";

export const GettingMerried = () => {
  return (
    <SectionWrapper className="max-w-4xl mx-auto" id="main">
      <Heading
        type="multiple"
        title="We are"
        subTitle="getting married!"
        description="we’d be delighted if you could join our wedding!"
        className="py-16"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WeddingCouple
          couple="Muhammad Harliansyah Wardana, S.Kom"
          coupleInfo={{
            gender: "male",
            parents: "Bapak H. Suhairi Mashur & Ibu Hj. Zulaikhah",
          }}
          imgPath={siteConfig.assets.images.gettingMarried[0]}
        />
        <WeddingCouple
          couple="Nur Sabrina Hana Afifah, S.A.P"
          coupleInfo={{
            gender: "female",
            parents: "Bapak Suliono, A.Md & Ibu Mardiyanti",
          }}
          imgPath={siteConfig.assets.images.gettingMarried[1]}
        />
      </div>
    </SectionWrapper>
  );
};
