import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { HowItWorksStep } from "@/components/HowItWorksStep";
import { MoodCard } from "@/components/MoodCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { LogoMark } from "@/components/Logo";
import { experiences, howItWorksSteps, moods, packageChecklist } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section id="hero">
        <div className="mx-auto grid max-w-content gap-12 px-5 pb-[72px] pt-[72px] sm:px-8 dt:grid-cols-[0.82fr_1.18fr] dt:items-center dt:gap-[72px] dt:px-12 dt:pb-[104px] dt:pt-24">
          <div className="dt:max-w-[470px]">
            <h1 className="font-display text-hero-mobile text-ink dt:text-hero">
              Better dates,
              <br />
              <span className="text-accent">thoughtfully</span>
              <br />
              designed.
            </h1>
            <p className="mb-8 mt-6 max-w-[420px] text-body text-ink-soft">
              Curated date experiences for couples who want to connect, have fun and create meaningful
              memories—without the planning.
            </p>
            <Button href="#mood-selection" variant="primary" analyticsId="hero_choose_date">
              Choose your date
            </Button>
          </div>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-[8px] dt:max-w-none dt:min-h-[470px]">
            <Image
              src="/images/hero-package.png"
              alt="The Better Date Co package: a kraft envelope printed with the logo, a note card reading 'Let's do something better tonight', and three sealed date-stage envelopes, styled next to a eucalyptus plant"
              fill
              priority
              sizes="(min-width: 820px) 55vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. How it works */}
      <section aria-labelledby="how-it-works-heading" id="how-it-works" className="bg-paper-dim">
        <div className="mx-auto max-w-content px-5 py-14 sm:px-8 dt:px-12">
          <h2 id="how-it-works-heading" className="sr-only">
            How it works
          </h2>
          <div className="grid gap-12 dt:grid-cols-3 dt:divide-x dt:divide-line">
            {howItWorksSteps.map((step) => (
              <HowItWorksStep key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mood selection */}
      <section aria-labelledby="mood-selection-heading" id="mood-selection">
        <div className="mx-auto max-w-content px-5 py-[72px] sm:px-8 dt:px-12 dt:py-[104px]">
          <SectionHeading id="mood-selection-heading" heading="What kind of date are you in the mood for?" />
          <div className="mt-12 grid gap-6 dt:grid-cols-3">
            {moods.map((mood) => (
              <MoodCard key={mood.key} mood={mood} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured experiences */}
      <section aria-labelledby="featured-experiences-heading" id="featured-experiences" className="bg-paper-dim">
        <div className="mx-auto max-w-content px-5 py-[72px] sm:px-8 dt:px-12 dt:py-[104px]">
          <SectionHeading
            id="featured-experiences-heading"
            heading="Thoughtfully curated experiences"
            supporting="Three unique dates. Created in Edinburgh."
          />
          <div className="mt-12 grid gap-6 dt:grid-cols-3">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.href} experience={experience} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="#mood-selection" variant="link" analyticsId="featured_browse_all">
              Browse all dates
            </Button>
          </div>
        </div>
      </section>

      {/* 5. What arrives in the package */}
      <section aria-labelledby="whats-inside-heading" id="whats-inside">
        <div className="mx-auto grid max-w-content gap-10 px-5 py-[72px] sm:px-8 dt:grid-cols-[1.05fr_0.95fr] dt:items-center dt:gap-16 dt:px-12 dt:py-[104px]">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[8px]">
            <Image
              src="/images/package-flat-lay.png"
              alt="Overhead photo of the package contents: an instructions booklet, a 'how it works' card and three sealed date-stage envelopes on a tabletop, with a small plant nearby"
              fill
              sizes="(min-width: 820px) 50vw, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 id="whats-inside-heading" className="font-display text-heading-mobile text-ink dt:text-heading">
              Everything you need,
              <br />
              nothing you don&apos;t.
            </h2>
            <ul className="mt-6 space-y-[14px]">
              {packageChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-body text-ink">
                  <Check aria-hidden="true" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-body text-ink-soft">
              You&apos;ll have enough to prepare—without knowing every surprise.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Final call to action */}
      <section aria-labelledby="final-cta-heading" id="final-cta" className="bg-paper-dim">
        <div className="mx-auto max-w-content px-5 py-[72px] text-center sm:px-8 dt:px-12 dt:py-[104px]">
          <LogoMark className="mx-auto h-9 w-9" />
          <SectionHeading id="final-cta-heading" heading="Your next date is already planned." />
          <div className="mt-8 flex justify-center">
            <Button href="#mood-selection" variant="primary" analyticsId="final_choose_date">
              Choose your date
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
