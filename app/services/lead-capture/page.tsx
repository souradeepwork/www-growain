"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { CheckCircle2, MousePointerClick, MessageSquare, BarChart3, Zap, ArrowRight, Shield, TrendingUp, Target } from "lucide-react";

const commonProblems = [
  "Slow, cluttered pages that frustrate mobile users.",
  "Weak or confusing calls-to-action.",
  "Long, unoptimized forms that drive drop-offs.",
  "No way to know which channels actually convert.",
];

const coreFeatures = [
  "Focused landing pages for each service, offer, or location.",
  "Clear, compelling calls-to-action: \"Book now,\" \"Call now,\" \"Get a quote.\"",
  "Smart, mobile-optimized forms that load instantly.",
  "Optional live chat or messaging where it truly helps the customer.",
  "Auto-routing and notifications so your team responds fast.",
];

const funnelBenefits = [
  "Unified funnel analytics inside your Growain dashboard.",
  "Lead source attribution across search, ads, and social.",
  "Conversion summaries with real impact metrics.",
  "Funnel drop-off tracking for optimization.",
];

const optimizationHighlights = [
  "Real-time alerts for form or chat performance issues.",
  "A/B testing for calls-to-action and page design.",
  "Continuous improvement based on live data.",
  "Human review and optimization every month.",
];

const systemComponents = [
  {
    title: "Lead & Funnel Tracker",
    description: "Tracks every form, chat, and action.",
  },
  {
    title: "Automation Studio",
    description: "Sends follow-ups and notifications instantly.",
  },
  {
    title: "Reporting Studio",
    description: "Shows which campaigns deliver the best ROI.",
  },
];

const heroImages = [
  { src: "/img/Business-Owner-&-AI-Collaboration-Scene.jpeg", alt: "Lead capture interface" },
  { src: "/img/cafe-owner-02.jpeg", alt: "Customer interaction" },
  { src: "/img/dashoards-2.jpeg", alt: "Funnel analytics" },
];

export default function LeadCapturePage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-black to-black" />
        <div className="absolute inset-0 dot-noise opacity-20" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] items-center">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Lead Capture & Forms</p>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-primary text-glow">
                  Make it effortless to contact, book, or request a quote.
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  Every click should lead to a conversation. Growain builds simple, high-converting forms, landing
                  pages, and chat tools that make it easy for customers to reach you-no confusion, no friction.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="pulse-glow" asChild>
                  <Link href="/book-demo">
                    Audit My Funnel
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

      {/* Why Leads Slip Away */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_minmax(0,0.85fr)] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Why Leads Slip Away</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
                You worked hard to get the click-don't lose the lead.
              </h2>
              <p className="text-lg text-foreground/80">
                Most businesses attract plenty of visitors but struggle to convert them. Pages load slowly. Buttons
                get buried. Forms are too long or not mobile-friendly. The result: missed opportunities and wasted
                ad spend.
              </p>
            </div>
            <Card className="border-primary/20 bg-black/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Common Problems We Solve</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {commonProblems.map((problem) => (
                  <div key={problem} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                    <p className="text-sm text-foreground/80">{problem}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-black to-black" />
        <div className="absolute inset-0 grid-surface opacity-10" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-10">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70">What We Build for You</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Forms and funnels designed to convert.
            </h2>
            <p className="text-lg text-foreground/80">
              Growain builds and manages your entire lead capture system-from fast, focused landing pages to smart
              chat integrations. Everything is designed around one goal: making it as easy as possible for people to
              take the next step.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {coreFeatures.map((feature) => (
              <Card key={feature} className="border-primary/15 bg-black/55">
                <CardContent className="flex items-start gap-3 p-6">
                  <MousePointerClick className="mt-1 h-5 w-5 text-primary" />
                  <p className="text-sm text-foreground/80">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg" className="pulse-glow" asChild>
              <Link href="/book-demo">
                Get My Lead Capture System
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Connected Funnel */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_1fr] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Connected Funnel, Clear Insight</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
                See exactly where every lead comes from-and what happens next.
              </h2>
              <p className="text-lg text-foreground/80">
                Growain's Lead & Funnel Tracker connects every interaction-from source to form to action-so you can
                see which campaigns, channels, and keywords actually drive revenue. No more guessing which clicks
                matter.
              </p>
              <Button size="lg" variant="secondary" className="mt-4" asChild>
                <Link href="/book-demo">
                  See My Funnel Data
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <Card className="border-primary/20 bg-black/60">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Funnel Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {funnelBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <BarChart3 className="mt-1 h-5 w-5 text-primary" />
                    <p className="text-sm text-foreground/80">{benefit}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Always-On Optimization */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-black to-black" />
        <div className="absolute inset-0 dot-noise opacity-15" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Always-On Optimization</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
                AI and human insight, working together.
              </h2>
              <p className="text-lg text-foreground/80">
                Your funnel isn't static-it evolves. Growain's AI continuously monitors performance and flags issues
                like slow forms, missed messages, or low conversion points. Our team reviews these insights and
                applies fixes before your results drop.
              </p>
              <Button size="lg" className="pulse-glow" asChild>
                <Link href="/book-demo">
                  Optimize My Funnel
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <Card className="border-primary/20 bg-black/55">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Optimization Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {optimizationHighlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <Zap className="mt-1 h-5 w-5 text-primary" />
                    <p className="text-sm text-foreground/80">{highlight}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* System Integration */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6 text-center mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70">How It Fits in the Growain Engine</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Every click connects to the bigger picture.
            </h2>
            <p className="text-lg text-foreground/80">
              Your lead capture system doesn't live in isolation. It's fully connected within the Growain Engine-integrating
              with your Local SEO Hub, Social Orchestrator, and Review System to give you one complete view of visibility,
              engagement, and conversion.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {systemComponents.map((component) => (
              <Card key={component.title} className="border-primary/15 bg-black/55">
                <CardContent className="p-6 text-center space-y-3">
                  <Target className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="text-lg font-semibold text-primary">{component.title}</h3>
                  <p className="text-sm text-foreground/80">{component.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className="pulse-glow" asChild>
              <Link href="/book-demo">
                Book a Free Growth Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Designed for Real Businesses */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-black to-black" />
        <div className="absolute inset-0 grid-surface opacity-10" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Designed for Real Businesses</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Built for teams who need results, not complexity.
            </h2>
            <p className="text-lg text-foreground/80">
              Whether you're a local clinic, home service brand, or growing eCommerce business, Growain gives you the
              tools to capture leads without juggling ten different platforms. You focus on customers-we handle the
              systems that get them to you.
            </p>
            <Card className="border-primary/20 bg-black/50 backdrop-blur inline-block">
              <CardContent className="p-8">
                <div className="flex items-center gap-4">
                  <Shield className="w-12 h-12 text-primary" />
                  <p className="text-lg text-foreground/90 italic">
                    "Clear paths. Faster response. More bookings. Less noise."
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="pt-4">
              <Button size="lg" className="pulse-glow" asChild>
                <Link href="/book-demo">
                  Get Started with Lead Capture
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-black to-black" />
        <div className="absolute inset-0 dot-noise opacity-20" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto space-y-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-emerald-dark flex items-center justify-center mx-auto glow-primary">
              <MessageSquare className="w-10 h-10 text-black" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Your next customer is one click away. Let's make it easy for them to reach you.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="pulse-glow" asChild>
                <Link href="/book-demo">
                  Audit My Funnel
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
