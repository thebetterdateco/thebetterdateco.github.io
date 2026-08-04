import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  CalendarClock,
  FileText,
  Heart,
  Instagram,
  Layers,
  Map,
  MapPin,
  Mail,
  MessageCircle,
  Package,
  PackageCheck,
  PenLine,
  Ticket,
} from "lucide-react";
import { SquiggleIcon, VennIcon } from "@/components/icons";

export type MoodKey = "playful" | "romantic" | "meaningful";
export type Icon = ComponentType<{ className?: string; strokeWidth?: number | string }>;

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Browse dates", href: "#mood-selection" },
  { label: "How it works", href: "#how-it-works" },
  // TODO: point at a real FAQ page once it's built (see project memory).
  { label: "FAQ", href: "/faq" },
];

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  icon: Icon;
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    number: "1",
    title: "Choose your experience",
    description: "Pick the mood that suits you and select one of our thoughtfully designed dates.",
    icon: Calendar,
  },
  {
    number: "2",
    title: "Receive your date package",
    description: "We send everything you need to your home, including instructions and sealed moments to open.",
    icon: Package,
  },
  {
    number: "3",
    title: "Follow the experience",
    description: "Open each envelope when instructed and let the evening unfold. Less planning, more connection.",
    icon: Heart,
  },
];

export interface Mood {
  key: MoodKey;
  title: string;
  tagline: string;
  description: string;
  ctaLabel: string;
  href: string;
  icon: Icon;
  analyticsId: string;
}

export const moods: Mood[] = [
  {
    key: "playful",
    title: "Playful",
    tagline: "Laugh, compete and try something different.",
    description: "For couples who want a relaxed, energetic evening with playful challenges and unexpected moments.",
    ctaLabel: "Explore playful dates",
    href: "/dates/playful",
    icon: SquiggleIcon,
    analyticsId: "mood_playful",
  },
  {
    key: "romantic",
    title: "Romantic",
    tagline: "Surprise your partner with something thoughtful.",
    description:
      "For celebrating each other, marking a milestone or turning an ordinary evening into something special.",
    ctaLabel: "Explore romantic dates",
    href: "/dates/romantic",
    icon: Heart,
    analyticsId: "mood_romantic",
  },
  {
    key: "meaningful",
    title: "Meaningful",
    tagline: "Slow down and reconnect with what matters.",
    description:
      "For couples who want uninterrupted time, better conversation and a more intentional evening together.",
    ctaLabel: "Explore meaningful dates",
    href: "/dates/meaningful",
    icon: VennIcon,
    analyticsId: "mood_meaningful",
  },
];

export type ExperienceImageVariant = "landscape" | "candlelight" | "interior";

export interface Experience {
  title: string;
  mood: MoodKey;
  moodLabel: string;
  description: string;
  duration: string;
  location: string;
  price: string;
  additionalSpend: string;
  ctaLabel: string;
  href: string;
  analyticsId: string;
  imageVariant: ExperienceImageVariant;
}

export const experiences: Experience[] = [
  {
    title: "Playful Pursuits",
    mood: "playful",
    moodLabel: "Playful",
    description:
      "A light-hearted Edinburgh date filled with friendly competition, small surprises and plenty to laugh about.",
    duration: "3 hours",
    location: "Edinburgh",
    price: "£30",
    additionalSpend: "£40–£60 per couple",
    ctaLabel: "View experience",
    href: "/experiences/playful-pursuits",
    analyticsId: "featured_playful_pursuits",
    imageVariant: "landscape",
  },
  {
    title: "The Thoughtful Surprise",
    mood: "romantic",
    moodLabel: "Romantic",
    description:
      "A carefully paced evening designed to make an ordinary night feel considered, personal and memorable.",
    duration: "3 hours",
    location: "Edinburgh",
    price: "£30",
    additionalSpend: "£50–£70 per couple",
    ctaLabel: "View experience",
    href: "/experiences/the-thoughtful-surprise",
    analyticsId: "featured_thoughtful_surprise",
    imageVariant: "candlelight",
  },
  {
    title: "Time for Us",
    mood: "meaningful",
    moodLabel: "Meaningful",
    description:
      "A calmer, connection-focused experience with guided moments, better conversation and time away from everyday distractions.",
    duration: "3 hours",
    location: "Edinburgh",
    price: "£30",
    additionalSpend: "£35–£55 per couple",
    ctaLabel: "View experience",
    href: "/experiences/time-for-us",
    analyticsId: "featured_time_for_us",
    imageVariant: "interior",
  },
];

export interface PackageItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const packageItems: PackageItem[] = [
  {
    title: "Welcome & preparation card",
    description: "A short introduction to your evening, plus anything you should organise beforehand.",
    icon: FileText,
  },
  {
    title: "High-level itinerary",
    description: "The shape of your evening, so you know roughly what to expect and when.",
    icon: Map,
  },
  {
    title: "Venue & booking information",
    description: "Where to go and what, if anything, you need to book ahead of time.",
    icon: Ticket,
  },
  {
    title: "Three sealed date-stage envelopes",
    description: "Opened together, in order, at the moments the experience is designed around.",
    icon: Mail,
  },
  {
    title: "Prompts, challenges & surprise elements",
    description: "The details that make the evening yours — kept sealed until the right moment.",
    icon: MessageCircle,
  },
  {
    title: "Post-date card",
    description: "A closing moment to reflect on the evening together, once it's done.",
    icon: PenLine,
  },
];

export const packageChecklist: string[] = [
  "Preparation card and itinerary",
  "Venue and booking guidance",
  "Three sealed moments to open during your date",
  "Conversation prompts and activities",
  "Post-date reflection card",
];

export interface PricingRow {
  label: string;
  value: string;
  emphasis?: boolean;
}

export const pricingRows: PricingRow[] = [
  { label: "Experience package", value: "£30" },
  { label: "Expected venue or activity spend", value: "£40–£60" },
];

export const pricingTotal: PricingRow = {
  label: "Estimated total date cost",
  value: "£70–£90 per couple",
  emphasis: true,
};

export interface TrustPointData {
  text: string;
  icon: LucideIcon;
}

export const trustPoints: TrustPointData[] = [
  { text: "Designed and tested in Edinburgh", icon: MapPin },
  { text: "Carefully structured from arrival through to the final moment", icon: Layers },
  { text: "Prepared in limited weekly quantities", icon: PackageCheck },
  { text: "Built for real couples with busy lives", icon: CalendarClock },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "What am I paying for?",
    answer:
      "You're paying for the complete date design and physical materials: a curated experience concept, preparation guidance, a high-level itinerary, prompts and challenges, and three sealed stage envelopes that guide the evening. It does not include any venue, food or drink purchases.",
  },
  {
    question: "Are food, drinks and venue costs included?",
    answer:
      "No. Your experience package covers the designed experience and materials only. Any venue, food, drink, transport or activity costs are separate, and each experience lists an estimated additional spend so you can budget in advance.",
  },
  {
    question: "How far in advance should I order?",
    answer:
      "We recommend allowing enough time for postal delivery before your planned date. Our exact recommended lead time is still being finalised and will be confirmed at checkout.",
  },
  {
    question: "Do I need to make any bookings?",
    answer:
      "Some experiences may ask you to make an external booking, such as a table or activity slot, using the instructions provided in your package. We'll always tell you what, if anything, needs to be booked.",
  },
  {
    question: "Can I buy an experience as a gift?",
    answer:
      "Yes, experiences are designed to work as gifts as well as for your own evening. Gifting details, such as delivering to a different address, are still being finalised.",
  },
  {
    question: "Will my partner know what is inside?",
    answer:
      "Only if you tell them. The outer package shares just enough to prepare, book and budget for the date, while the three sealed stage envelopes are designed to be opened together, on the date itself.",
  },
  {
    question: "What happens if the package is delayed?",
    answer:
      "Postal timing can vary, and our exact delay policy and support process are still being confirmed. In the meantime, we recommend leaving some buffer between ordering and your planned date.",
  },
  {
    question: "Is this only available in Edinburgh?",
    answer:
      "For now, yes. Our first collection is designed and delivered for dates in Edinburgh. Broader city coverage and at-home experiences are planned for the future.",
  },
];

export const withoutPoints: string[] = [
  "Researching date ideas",
  "Booking a venue",
  "Coordinating every detail",
];

export const withPoints: string[] = ["Choose a mood", "Open the package", "Follow the evening"];

export const policyLinks: NavLink[] = [
  { label: "Delivery & Returns", href: "/delivery-and-refunds" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: Icon;
}

// TODO: replace with real social/contact links before launch.
export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Email", href: "mailto:hello@thebetterdate.co", icon: Mail },
];
