"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { CheckCircle2, ArrowRight, Sparkles, Cloud, Zap } from "lucide-react";

const beliefs = [
  "Clarity beats complexity.",
  "Authenticity drives trust.",
  "Local presence is the new brand awareness.",
  "AI should empower humans, not replace them.",
];

const whatWeDeliver = [
  "Stronger local visibility on Google Maps and Search.",
  "Real reviews and authentic social proof.",
  "Always-on content across social and search.",
  "Clear, actionable reports you can actually use.",
  "A team that manages everything for you - no juggling 10 tools.",
];

const process = [
  "Discovery & Audit - Understand where you stand.",
  "90-Day Growth Plan - Prioritize quick wins and lasting strategies.",
  "Execution - Launch, optimize, and automate.",
  "Reporting - Transparent insights that show what is working.",
];

const systemComponents = [
  "Local SEO Hub -> boosts post visibility in Maps and search.",
  "Review & Survey Hub -> connects happy customer moments to social proof.",
  "Reporting Studio -> unified view of reach, leads, and engagement.",
];

const whoWeHelp = [
  "Healthcare, clinics, and wellness brands",
  "Coffee shops, QSRs, and hospitality",
  "Pet care, baby care, and lifestyle businesses",
  "Fitness studios, salons, and senior services",
  "Ecommerce, specialty retail, and service businesses",
  "Agencies and marketing teams managing multiple clients",
];

const whyChoose = [
  {
    title: "Honest",
    description: "No inflated promises or vanity metrics-just transparent insight.",
  },
  {
    title: "Connected",
    description: "One platform tying together SEO, social, reviews, and reporting.",
  },
  {
    title: "Managed",
    description: "Real people plus powerful AI keep growth moving while you run the business.",
  },
  {
    title: "Scalable",
    description: "Built for single locations and multi-branch brands alike.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-black to-black" />
        <div className="absolute inset-0 grid-surface opacity-20" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
                Built by Cloudain
                <Sparkles className="h-4 w-4 text-primary" />
              </span>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-primary text-glow">
                  Grow smarter, not harder.
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  Growain helps real businesses-from clinics and cafes to ecommerce brands-turn search, reviews, and social activity
                  into measurable growth. Built by Cloudain, it's a connected marketing system powered by AI, human insight, and honest outcomes.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="pulse-glow" asChild>
                  <Link href="/book-demo">Book a Free Growth Audit</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/solutions">Explore Solutions</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[32px] border border-primary/30 bg-black/50 p-4">
                <Image
                  src="/img/growain-engine.jpeg"
                  alt="Growain Engine"
                  width={700}
                  height={500}
                  className="rounded-3xl object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 rounded-2xl bg-black/70 border border-primary/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary/70">
                Growain Engine
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
                Small and mid-sized businesses don't lack tools. They lack lift.
              </h2>
              <p className="text-lg text-foreground/80">
                Marketing data lives everywhere-across Google, social platforms, analytics tools, and review sites. Most teams spend more
                time switching tabs than creating impact. Growain was built to change that.
              </p>
              <p className="text-lg text-foreground/80">
                Our mission is to give growing businesses one connected system that turns scattered signals into simple, actionable insight.
                No vanity dashboards. No fake metrics. Just clarity, visibility, and results.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/platform">Learn About the Growain Engine</Link>
              </Button>
            </div>
            <Card className="border-primary/20 bg-black/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Core Beliefs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {beliefs.map((belief) => (
                  <div key={belief} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    <p className="text-sm text-foreground/80">{belief}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-black to-black" />
        <div className="absolute inset-0 grid-surface opacity-10" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">One system, many ways to grow.</h2>
            <p className="text-lg text-foreground/80">
              Growain is an AI-powered marketing platform that unifies SEO, Maps, social media, and reputation management into one
              operating system. Powered by Cloudain's AI and cloud infrastructure, it connects all your growth data into a single source of truth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {whatWeDeliver.map((item) => (
              <Card key={item} className="border-primary/15 bg-black/55">
                <CardContent className="flex items-start gap-3 p-6">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                  <p className="text-sm text-foreground/80">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 rounded-3xl border border-primary/25 bg-black/50 p-6 md:p-10">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70 mb-4">How the engine flows</p>
            <div className="flex flex-wrap gap-4 items-center text-lg font-display text-primary">
              <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5">Data</span>
              <ArrowRight className="h-5 w-5 text-primary" />
              <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5">Insights</span>
              <ArrowRight className="h-5 w-5 text-primary" />
              <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5">Action</span>
              <ArrowRight className="h-5 w-5 text-primary" />
              <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5">Growth</span>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
                AI-powered. Human-driven. Outcome-focused.
              </h2>
              <p className="text-lg text-foreground/80">
                Growain combines automation with expertise. Cloudain's AI engine constantly monitors your visibility, rankings, reviews,
                and competitors. Then our growth team turns those signals into actions-optimizations, campaigns, and content.
              </p>
              <p className="text-lg text-foreground/80">You stay focused on your business while we handle the moving parts.</p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/book-demo">Book a Free Growth Audit</Link>
              </Button>
            </div>
            <Card className="border-primary/20 bg-black/60">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {process.map((step, idx) => (
                  <div key={step} className="flex items-start gap-3">
                    <div className="rounded-full border border-primary/40 px-4 py-1 text-sm font-semibold text-primary">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <p className="text-sm text-foreground/80">{step}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Built on Cloudain */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/25 via-black to-black" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_1fr] items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
                Powered by Cloudain, trusted by real businesses.
              </h2>
              <p className="text-lg text-foreground/80">
                Growain runs on Cloudain's secure, enterprise-grade infrastructure. That means reliability, privacy, and compliance are
                built in from day one.
              </p>
              <p className="text-lg text-foreground/80">
                The same cloud engine that powers enterprise analytics now drives local growth for small and mid-sized businesses-with the
                same precision, security, and speed.
              </p>
              <div className="grid gap-4">
                {systemComponents.map((component) => (
                  <div key={component} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Cloud className="h-5 w-5 text-primary mt-1" />
                    <p>{component}</p>
                  </div>
                ))}
              </div>
              <Button size="lg" variant="outline" asChild>
                <Link href="/platform">Learn About Cloudain</Link>
              </Button>
            </div>
            <div className="rounded-[32px] border border-primary/30 bg-black/40 p-4">
              <Image
                src="/img/02-growain-engine.jpeg"
                alt="Cloudain infrastructure"
                width={650}
                height={500}
                className="rounded-[24px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">Who We Help</h2>
            <p className="text-lg text-foreground/80">
              If people search, scroll, or check Maps before they choose you-you're our customer.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {whoWeHelp.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/25 via-black to-black" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Because we connect what others separate.
            </h2>
            <p className="text-lg text-foreground/80">
              Growain isn't just another analytics tool-it's a growth operating system. We unify your marketing data, show you what
              matters, and help you act on it fast.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item) => (
              <Card key={item.title} className="border-primary/20 bg-black/65 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-foreground/75">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 rounded-3xl border border-primary/20 bg-black/60 p-8 text-center space-y-4">
            <p className="text-lg text-foreground/80 italic">
              "We didn't want another dashboard. We wanted compounding growth."
            </p>
            <Button size="lg" className="pulse-glow" asChild>
              <Link href="/platform">See How Growain Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              The future of marketing is connected-and powered by clarity.
            </h2>
            <p className="text-lg text-foreground/80">
              We believe every business, no matter the size, deserves access to the same clarity that big brands take for granted.
              That's why we're building Growain as both a managed service today and a self-service SaaS platform for the future.
            </p>
            <p className="text-lg text-foreground/80">
              Growain is where AI meets authenticity, and clarity drives growth.
            </p>
            <Button size="lg" className="pulse-glow" asChild>
              <Link href="/book-demo">Get Started with Growain</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
