"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { CheckCircle2, Calendar, PenSquare, BarChart3, RefreshCw, ArrowRight } from "lucide-react";

const heroImages = [
  { src: "/img/Business-Owner-&-AI-Collaboration-Scene.jpeg", alt: "Social planning" },
  { src: "/img/store-journey.jpeg", alt: "Customer interaction" },
  { src: "/img/cafe-owner-see.jpeg", alt: "Cafe owner posting" },
];

const supportingPoints = [
  "Active, consistent profiles improve both trust and local SEO.",
  "Regular content tells customers you're open, engaged, and reliable.",
  "Every post supports your search visibility, not just your followers.",
];

const deliverables = [
  " Monthly content calendar tuned to your industry and key dates.",
  " Cross-platform publishing (Instagram, Facebook, LinkedIn, TikTok).",
  " On-brand visuals and captions written for engagement and clarity.",
  " Performance tracking directly connected to leads and calls.",
  " Automated posting using Growain's AI Orchestrator.",
];

const exampleVerticals = [
  "Healthcare awareness posts",
  "Seasonal promotions for cafés",
  "Fitness challenges",
  "Product highlights for retailers",
  "Community events for local services",
];

const keyFeatures = [
  "Integrated reporting with your website, ads, and Google profiles.",
  "AI insights: 'this post drove 40% more traffic' or 'this time slot converts best.'",
  "Transparent dashboards-no fluff, no vanity metrics.",
];

const systemComponents = [
  "Local SEO Hub → boosts post visibility in Maps and search.",
  "Review & Survey Hub → connects happy customer moments to social proof.",
  "Reporting Studio → unified view of reach, leads, and engagement.",
];

const exampleActions = [
  "Publish regular GBP posts (offers, events, updates).",
  "Keep hours, menus, and seasonal changes synced.",
  "Refresh photos, FAQs, and service highlights.",
  "Monitor keyword trends to help you rank for local intent terms.",
];

const monitoringFeatures = [
  "Integrated reporting with your website, ads, and Google profiles.",
  "AI insights: 'this post drove 40% more traffic' or 'this time slot converts best.'",
  "Transparent dashboards-no fluff, no vanity metrics.",
];

export default function SocialMediaPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-black to-black" />
        <div className="absolute inset-0 dot-noise opacity-20" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] items-center">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Social Media Services</p>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-primary text-glow">
                  Stay visible without living on social.
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  We help your business show up where your audience scrolls. Growain plans, creates, and manages your social presence
                  across Instagram, Facebook, LinkedIn, and more-using data and AI to keep your content relevant, consistent, and effective.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="pulse-glow" asChild>
                  <Link href="/book-demo">
                    Plan My Next 30 Days
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/book-demo">Book a Free Growth Audit</Link>
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

      {/* Why Social Still Matters */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_minmax(0,0.85fr)] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Why Social Still Matters</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
                Because showing up builds trust.
              </h2>
              <p className="text-lg text-foreground/80">
                Your customers check your social profiles before they call, visit, or book. A quiet feed signals inactivity.
                An active, consistent presence signals reliability, relevance, and growth.
              </p>
            </div>
            <Card className="border-primary/20 bg-black/50 backdrop-blur">
              <CardContent className="p-8 space-y-4">
                {supportingPoints.map((point) => (
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

      {/* What We Deliver */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-black to-black" />
        <div className="absolute inset-0 grid-surface opacity-10" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-10">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70">What We Deliver</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Consistent content, managed for you.
            </h2>
            <p className="text-lg text-foreground/80">
              Every post runs through Growain's content engine-planned, created, published, and measured automatically.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {deliverables.map((item) => (
              <Card key={item} className="border-primary/15 bg-black/55">
                <CardContent className="flex items-start gap-3 p-6">
                  <Calendar className="mt-1 h-5 w-5 text-primary" />
                  <p className="text-sm text-foreground/80">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Example Content Types */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6 text-center mb-10">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Content Examples</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              What we create for different industries.
            </h2>
            <p className="text-lg text-foreground/80">
              We tailor content to your vertical, season, and audience-ensuring every post feels authentic and relevant.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {exampleVerticals.map((example) => (
              <Card key={example} className="border-primary/20 bg-black/60">
                <CardContent className="p-6 text-center">
                  <PenSquare className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium text-foreground/90">{example}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Measurement That Matters */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-black to-black" />
        <div className="absolute inset-0 dot-noise opacity-15" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Measurement That Matters</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
                See what actually drives results.
              </h2>
              <p className="text-lg text-foreground/80">
                Growain connects your social posts to real business outcomes-calls, bookings, form submissions.
                No vanity metrics. Just clear insights on what's working and what's not.
              </p>
              <Button size="lg" className="pulse-glow" asChild>
                <Link href="/book-demo">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <Card className="border-primary/20 bg-black/55">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Connected Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {keyFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <BarChart3 className="mt-1 h-5 w-5 text-primary" />
                    <p className="text-sm text-foreground/80">{feature}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Part of the Bigger System */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6 text-center mb-10">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Part of the Bigger System</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Social works better when it's connected.
            </h2>
            <p className="text-lg text-foreground/80">
              Growain's social media management isn't a standalone service-it's integrated with your local SEO,
              reviews, and analytics for coordinated growth.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {systemComponents.map((component) => (
              <Card key={component} className="border-primary/15 bg-black/55">
                <CardContent className="p-6 text-center">
                  <RefreshCw className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-foreground/80">{component}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-black to-black" />
        <div className="absolute inset-0 dot-noise opacity-20" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Ready to Stay Active?</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Let Growain handle your social presence.
            </h2>
            <p className="text-lg text-foreground/80">
              Get a content plan, managed publishing, and real performance insights-all in one system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="pulse-glow" asChild>
                <Link href="/book-demo">
                  Plan My Next 30 Days
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/book-demo">Book a Free Growth Audit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
