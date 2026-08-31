import ProfilePic from "@img/profile-oficial.jpeg";

import RoutePage from "@/components/layout/RoutePage";
import { MyProfile } from "@/data";

import AboutHeroTimeline from "./AboutHeroTimeline";
import ProfileImage from "./ProfileImage";
import SkeletonText from "./SkeletonText";

type AboutHeroProps = {
  loading?: boolean;
};

export default function AboutHero({ loading = false }: AboutHeroProps) {
  const bioParagraphs = MyProfile.about.fullBio.split("\n\n");

  return (
    <RoutePage
      labelledBy="about-heading"
      ariaHidden={loading || undefined}
      width="md"
      contentClassName="items-start gap-20"
    >
      <div className="flex flex-col gap-4">
        <h1
          id="about-heading"
          className="from-accent via-primary to-secondary bg-linear-to-r bg-clip-text pb-6 text-5xl font-bold text-transparent md:pb-4"
        >
          <SkeletonText loading={loading}>{MyProfile.about.title}</SkeletonText>
        </h1>
        <div className="flex flex-wrap gap-8 md:flex-nowrap lg:gap-16">
          <ProfileImage
            src={ProfilePic}
            alt={MyProfile.name}
            loading={loading}
          />

          <div className="max-w-2xl space-y-4 leading-relaxed">
            {bioParagraphs.map((paragraph) => (
              <p key={paragraph}>
                <SkeletonText loading={loading}>{paragraph}</SkeletonText>
              </p>
            ))}
          </div>
        </div>
      </div>

      <AboutHeroTimeline loading={loading} />
    </RoutePage>
  );
}
