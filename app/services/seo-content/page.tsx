"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { CheckCircle2, Sparkles, LineChart } from "lucide-react";

const challenges = [
  "Keyword gaps and stale content that stop ranking momentum.",
  "Unclear reporting - not knowing which pieces actually drive leads.",
  "Missed opportunities in AI Overviews (SGE) and zero-click searches.",
  "No system to align SEO, blogs, and social posts under one rhythm.",
];

const deliverables = [
  "Keyword & Intent Engine: Cluster keywords by search intent and discover hidden opportunities competitors miss.",
  "Content Blueprinting: AI-assisted topic maps, outlines, and briefs aligned to what your audience actually searches.",
  "On-Page Optimization: Titles, schema, metadata, and internal links tuned to your vertical and local markets.",
  "Generative Engine Optimization (GEO): Optimize content to appear in AI Overviews (Google SGE, Bing Copilot).",
  "SEO Health Scoring: Monitor Core Web Vitals and fix issues before rankings drop.",
  "Performance Tracking: Real-time analytics connecting keywords → content → conversions.",
];

const process = [
  "Audit: Assess site health, keyword clusters, and content opportunities.",
  "Plan: Create a 90-day roadmap of quick wins and evergreen content.",
  "Execute: AI-assisted drafting + human editing for precision and authenticity.",
  "Measure: See real impact in clicks, conversions, and AI search mentions.",
];

const exampleActions = [
  "Alert if a key landing page slows or drops in visibility.",
  "Suggest new internal links or topical clusters.",
  "Refresh underperforming posts or outdated sections.",
  "Highlight trending AI Overview opportunities.",
];

const heroImages = [
  { src: "/marketing/hero-dashboard.png", alt: "SEO dashboard" },
  { src: "/marketing/feature-analytics.png", alt: "Content analytics" },
  { src: "/marketing/feature-reports.png", alt: "Reporting view" },
];

export default function SEOContentPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-black to-black" />
        <div className="absolute inset-0 dot-noise opacity-20" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] items-center">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">SEO & Content</p>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-primary text-glow">
                  Turn search intent into steady traffic and compounding growth.
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  Growain unifies SEO and content marketing into one intelligent system - powered by AI and Cloudain.
                  From keyword strategy to publishing cadence, every step is connected, measurable, and built for organic lift.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="pulse-glow" asChild>
                  <Link href="/book-demo">Start My SEO Growth Plan</Link>
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

      {/* Why SEO + Content Still Wins */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_minmax(0,0.85fr)] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Why SEO + Content Still Wins</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
                Because showing up first still starts with relevance.
              </h2>
              <p className="text-lg text-foreground/80">
                Search is where intent lives - every click, question, or comparison tells a story. But fragmented tools, slow audits,
                and disconnected content calendars waste that opportunity. Growain brings all of it together - keywords, content, and site performance - so you can act faster and grow smarter.
              </p>
            </div>
            <Card className="border-primary/20 bg-black/50 backdrop-blur">
              <CardContent className="p-8 space-y-4">
                {challenges.map((challenge) => (
                  <div key={challenge} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                    <p className="text-sm text-foreground/80">{challenge}</p>
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
              One connected growth engine for search and story.
            </h2>
            <p className="text-lg text-foreground/80">
              Every improvement runs on Cloudain’s infrastructure - giving you live SEO health checks, keyword intelligence, and AI-driven recommendations in one view.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {deliverables.map((item) => (
              <Card key={item} className="border-primary/15 bg-black/55">
                <CardContent className="flex items-start gap-3 p-6">
                  <Sparkles className="mt-1 h-5 w-5 text-primary" />
                  <p className="text-sm text-foreground/80">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_1fr] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">How It Works</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">AI insights meet human strategy.</h2>
              <p className="text-lg text-foreground/80">
                Growain’s AI doesn’t just suggest what to write - it learns the rhythm of your market. It analyzes thousands of search patterns, Reddit and Quora discussions, and performance signals, then surfaces what’s trending before competitors act. Our team refines, publishes, and measures impact continuously.
              </p>
              <Button size="lg" variant="secondary" className="mt-4" asChild>
                <Link href="/book-demo">See My Content Plan</Link>
              </Button>
            </div>
            <Card className="border-primary/20 bg-black/60">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {process.map((step, index) => (
                  <div key={step} className="flex items-start gap-3">
                    <div className="rounded-full border border-primary/40 px-4 py-1 text-sm font-semibold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="text-sm text-foreground/80">{step}</p>
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
                Your SEO shouldn’t sleep between reports.
              </h2>
              <p className="text-lg text-foreground/80">
                Cloudain’s AI agents track rankings, CTR shifts, Core Web Vitals, and competitor movements 24/7. When something changes - a ranking drop, new keyword surge, or SERP layout update - Growain responds automatically with recommendations or adjustments.
              </p>
              <Button size="lg" className="pulse-glow" asChild>
                <Link href="/book-demo">Get Live SEO Monitoring</Link>
              </Button>
            </div>
            <Card className="border-primary/20 bg-black/55">
              <CardHeader>
                <CardTitle className="text-xl text-primary">We Keep You Ahead</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {exampleActions.map((action) => (
                  <div key={action} className="flex items-start gap-3">
                    <LineChart className="mt-1 h-5 w-5 text-primary" />
                    <p className="text-sm text-foreground/80">{action}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Result */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70">The Result</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Content that compounds, rankings that sustain.
            </h2>
            <p className="text-lg text-foreground/80">
              With Growain, SEO stops being guesswork and starts being continuous growth. You don’t need ten tools or monthly fire drills - just one connected engine turning search signals into measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="pulse-glow" asChild>
                <Link href="/book-demo">Start My SEO Growth Plan</Link>
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
