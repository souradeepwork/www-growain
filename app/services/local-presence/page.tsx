"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { CheckCircle2, MapPin, RefreshCw, Shield, Zap, Radar, Eye, BellRing } from "lucide-react";

const painPoints = [
  "Outdated or inconsistent business info across Maps, directories, and websites.",
  "Weak visuals or missing attributes that reduce trust.",
  "Competitors outranking you for “near me” and category keywords.",
  "No system to monitor and maintain multi-location accuracy.",
];

const fixes = [
  "Audit and clean up Google Business Profiles across all locations.",
  "Correct categories, hours, services, and contact info.",
  "Write local-first descriptions that highlight what makes you the right choice.",
  "Upload verified photos that reflect the real experience.",
  "Standardize your brand across Google, Apple Maps, Bing, Yelp, and niche directories.",
  "Handle duplicate listings, policy flags, and location-level insights.",
];

const careHighlights = [
  {
    title: "Publish regular GBP posts",
    detail: "Offers, events, menus, and updates scheduled so every location stays active.",
  },
  {
    title: "Sync seasonal changes",
    detail: "Hours, menus, and services update automatically across every directory.",
  },
  {
    title: "Refresh visuals & FAQs",
    detail: "New photos, Q&A, and service highlights keep profiles relevant.",
  },
  {
    title: "Monitor keyword trends",
    detail: "Rank for local-intent terms by reacting to search behavior in real time.",
  },
];

const monitoringFeatures = [
  {
    icon: Radar,
    title: "Real-time keyword & location tracking",
    description: "Know where you rank for every priority term across each service area.",
  },
  {
    icon: Eye,
    title: "Competitor proximity monitoring",
    description: "See who is moving into your radius and which signals they’re winning with.",
  },
  {
    icon: BellRing,
    title: "Alert-driven updates",
    description: "Instant notifications when info changes, impressions dip, or policies flag an issue.",
  },
  {
    icon: Shield,
    title: "Reporting Studio integration",
    description: "Tie local visibility to calls, bookings, and visits in one trustworthy view.",
  },
];

const heroImages = [
  {
    src: "/img/cafe-owner-02.jpeg",
    alt: "Local storefront with signage",
  },
  {
    src: "/img/store-journey.jpeg",
    alt: "Friendly staff assisting customer",
  },
  {
    src: "/img/search-to-store-journey.jpeg",
    alt: "Cafe interior with customers",
  },
];

export default function LocalPresencePage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-black to-black" />
        <div className="absolute inset-0 dot-noise opacity-20" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] items-center">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Local Presence</p>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-primary text-glow">
                  Be the obvious choice on Maps and local search.
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  If customers search “near me” before they visit-whether you’re a clinic, café, salon, gym,
                  pet care brand, or home service-Growain makes sure they find you first and feel confident
                  choosing you.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="pulse-glow" asChild>
                  <Link href="/book-demo">Start My Local Growth Plan</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/book-demo">Book a  Growth Audit</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {heroImages.map((image, idx) => (
                <div
                  key={image.src}
                  className={`relative overflow-hidden rounded-[24px] border border-primary/20 bg-black/30 p-4 ${
                    idx === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="h-full w-full rounded-2xl object-cover"
                  />
                  <div className="absolute inset-0 rounded-[24px] bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,0.9fr)]">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Why Local Presence Matters</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
                Every local decision starts with a search.
              </h2>
              <p className="text-lg text-foreground/80">
                Before they call, book, or visit, your customers search. But incomplete listings, wrong hours,
                or mismatched details can send them to a competitor instead. Growain fixes every gap that stands
                between you and being found first.
              </p>
            </div>
            <Card className="border-primary/20 bg-black/50 backdrop-blur">
              <CardContent className="p-8 space-y-4">
                {painPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                    <p className="text-sm text-foreground/80">{point}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What we fix */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-black to-black" />
        <div className="absolute inset-0 grid-surface opacity-10" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-10">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70">What We Fix and Optimize</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Your foundation for local visibility.
            </h2>
            <p className="text-lg text-foreground/80">
              Whether you have one storefront or fifty, Growain’s Local SEO Hub keeps every detail consistent,
              accurate, and optimized for visibility.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {fixes.map((fix) => (
              <Card key={fix} className="border-primary/15 bg-black/50">
                <CardContent className="flex items-start gap-3 p-6">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <p className="text-sm text-foreground/80">{fix}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Always-on care */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_minmax(0,0.85fr)]">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Always-On Local SEO Care</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
                Stay fresh, fast, and findable - always.
              </h2>
              <p className="text-lg text-foreground/80">
                Visibility doesn’t stop at setup. Our team and Cloudain’s AI agents track rankings, searches,
                listing edits, and competitor movements in real time. When something shifts - a drop in impressions,
                a new competitor, or a keyword trend - we act fast.
              </p>
              <Button size="lg" variant="secondary" className="mt-4" asChild>
                <Link href="/book-demo">See How It Works</Link>
              </Button>
            </div>
            <Card className="border-primary/20 bg-black/60 backdrop-blur">
              <CardContent className="grid gap-6 p-8">
                {careHighlights.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <p className="text-base font-display text-primary">{item.title}</p>
                    <p className="text-sm text-foreground/75">{item.detail}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI monitoring */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-black to-black" />
        <div className="absolute inset-0 dot-noise opacity-15" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70">AI-Powered Monitoring</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">Your silent growth engine.</h2>
            <p className="text-lg text-foreground/80">
              Cloudain’s AI watches every signal: searches, profile changes, ranking movements, and customer actions.
              You get instant visibility into what’s working - and alerts when it’s not. Growain’s system then recommends
              (or executes) fixes automatically, keeping your local presence optimized without daily micromanagement.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {monitoringFeatures.map((feature) => (
              <Card key={feature.title} className="border-primary/15 bg-black/55">
                <CardHeader className="flex items-start gap-4">
                  <div className="rounded-2xl bg-primary/10 p-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                    <CardDescription className="text-sm text-foreground/75 mt-2">
                      {feature.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 text-center mx-auto">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70">The Result</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              More maps visibility. More calls. More visits.
            </h2>
            <p className="text-lg text-foreground/80">
              Businesses running Growain see clearer paths from discovery to decision. When every location shows
              accurate info, consistent branding, and strong signals, you don’t just get found - you get chosen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="pulse-glow" asChild>
                <Link href="/book-demo">Start My Local Growth Plan</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/book-demo">Book a  Growth Audit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
