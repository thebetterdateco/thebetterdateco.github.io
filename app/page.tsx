import Link from "next/link";
import { Check, MapPin, X } from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { PackageIllustration } from "@/components/PackageIllustration";
import { HowItWorksStep } from "@/components/HowItWorksStep";
import { MoodCard } from "@/components/MoodCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { PackageItem } from "@/components/PackageItem";
import { PricingBreakdown } from "@/components/PricingBreakdown";
import { TrustPoint } from "@/components/TrustPoint";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  experiences,
  faqItems,
  howItWorksSteps,
  moods,
  packageItems,
  pricingRows,
  pricingTotal,
  trustPoints,
  withoutPoints,
  withPoints,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section id="hero" className="border-b border-line">
        <div className="mx-auto grid max-w-content gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div>
            <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              Better dates, thoughtfully designed.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              Curated date experiences for couples who want to connect, have fun and create meaningful
              memories—without having to plan the evening themselves.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#mood-selection" variant="primary" analyticsId="hero_choose_date">
                Choose your date
              </Button>
              <Button href="#how-it-works" variant="secondary" analyticsId="hero_how_it_works">
                See how it works
              </Button>
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm text-ink-soft">
              <MapPin aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
              Thoughtfully designed in Edinburgh
            </p>
          </div>
          <PackageIllustration className="mx-auto w-full max-w-md lg:max-w-none" />
        </div>
      </section>

      {/* 2. Problem and value proposition */}
      <section aria-labelledby="why-it-matters-heading" id="why-it-matters" className="border-b border-line bg-paper-dim">
        <div className="mx-auto grid max-w-content gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div>
            <SectionHeading
              id="why-it-matters-heading"
              heading="Planning something meaningful shouldn't feel like another task."
            />
            <p className="mt-4 text-ink-soft">
              You want to make time for each other, but finding the idea, choosing the venue and organising every
              detail takes time and energy. The Better Date Co gives you a complete experience to follow, so you
              can focus on being together.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-md2 border border-line bg-paper p-6 shadow-soft">
              <p className="text-sm font-medium uppercase tracking-wide text-ink-soft">Typically involves</p>
              <ul className="mt-4 space-y-3">
                {withoutPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-ink-soft">
                    <X aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-md2 border border-accent/30 bg-paper p-6 shadow-soft">
              <p className="text-sm font-medium uppercase tracking-wide text-accent-dark">With The Better Date Co</p>
              <ul className="mt-4 space-y-3">
                {withPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-ink">
                    <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How it works */}
      <section aria-labelledby="how-it-works-heading" id="how-it-works" className="border-b border-line">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading id="how-it-works-heading" heading="How it works" align="left" />
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {howItWorksSteps.map((step) => (
              <HowItWorksStep key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mood selection */}
      <section aria-labelledby="mood-selection-heading" id="mood-selection" className="border-b border-line bg-paper-dim">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            id="mood-selection-heading"
            heading="What kind of date are you in the mood for?"
            supporting="Choose how you want the date to feel."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {moods.map((mood) => (
              <MoodCard key={mood.key} mood={mood} imageRotation={mood.key === "playful"} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured experiences */}
      <section aria-labelledby="featured-experiences-heading" id="featured-experiences" className="border-b border-line">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading id="featured-experiences-heading" heading="Three ways to make your next date better." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.href} experience={experience} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. What arrives in the package */}
      <section aria-labelledby="whats-inside-heading" id="whats-inside" className="border-b border-line bg-paper-dim">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading id="whats-inside-heading" heading="Everything you need, delivered before the date." />
          <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {packageItems.map((item) => (
              <PackageItem key={item.title} {...item} />
            ))}
          </div>
          <p className="mt-12 max-w-2xl border-l-2 border-accent pl-6 font-display text-lg italic text-ink-soft">
            You will know enough to prepare, book and budget—but not so much that the surprise disappears.
          </p>
        </div>
      </section>

      {/* 7. Pricing transparency */}
      <section aria-labelledby="pricing-heading" id="pricing" className="border-b border-line">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading id="pricing-heading" heading="Know what the date will cost before you choose it." />
          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
            <PricingBreakdown rows={pricingRows} total={pricingTotal} />
            <p className="text-ink-soft">
              Venue purchases are not included unless explicitly stated. Your experience includes the complete
              date design, physical materials, instructions, prompts and recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Trust and early-stage validation */}
      <section aria-labelledby="trust-heading" id="trust" className="border-b border-line bg-paper-dim">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading id="trust-heading" heading="Designed with care, not mass produced." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <TrustPoint key={point.text} {...point} />
            ))}
          </div>
          <blockquote className="mt-12 max-w-2xl border-l-2 border-accent pl-6 font-display text-xl leading-snug text-ink">
            We believe a good date should feel thoughtful without being difficult to organise. Every experience is
            designed to create a natural progression—from anticipation to shared moments to a memorable ending.
          </blockquote>
        </div>
      </section>

      {/* 9. Availability */}
      <section aria-labelledby="availability-heading" id="availability" className="border-b border-line">
        <div className="mx-auto max-w-content px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            id="availability-heading"
            heading="Currently available in Edinburgh."
            align="center"
          />
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            Our first collection is designed for dates in Edinburgh. A limited number of physical date packages are
            prepared each week.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#mood-selection" variant="primary" analyticsId="availability_choose_date">
              Choose a date
            </Button>
            <Link
              href="/waitlist"
              data-analytics-id="availability_join_waitlist"
              className="inline-flex min-h-[44px] items-center justify-center text-sm font-medium text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-ink"
            >
              Join the city waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section aria-labelledby="faq-heading" id="faq" className="border-b border-line bg-paper-dim">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading id="faq-heading" heading="Frequently asked questions." />
          <div className="mt-10">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* 11. Final call to action */}
      <section aria-labelledby="final-cta-heading" id="final-cta">
        <div className="mx-auto max-w-content px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading id="final-cta-heading" heading="Your next date is already planned." align="center" />
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            Choose the experience that fits how you want to spend time together. We will take care of the
            structure, details and surprises.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="#mood-selection" variant="primary" analyticsId="final_choose_experience">
              Choose your experience
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
