"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { CheckCircle2, Star, MessageCircle, TrendingUp, Shield, ArrowRight, Sparkles, BarChart3 } from "lucide-react";

const whyReviewsMatter = [
  "90% of buyers check reviews before choosing.",
  "Google Reviews directly influence Maps and SEO visibility.",
  "Responding builds trust, even when feedback isn't perfect.",
];

const coreFeatures = [
  "Post-visit invitations via SMS, email, or QR code.",
  "Branded review pages that look and feel like your business.",
  "Private feedback channels for issues-so complaints don't go public first.",
  "Automated reminders that respect customer consent.",
  "Central review dashboard tracking ratings, responses, and trends.",
];

const aiBenefits = [
  "Identify recurring praise and problem areas instantly.",
  "See trending topics over time.",
  "Compare performance by location or service line.",
  "Get plain-language summaries every month.",
];

const visibilityHighlights = [
  "Review volume and response rate improve local rankings.",
  "Connected to Growain's Local SEO Hub and Maps Optimization.",
  "Instant alerts for new reviews or changes in rating trends.",
];

const systemComponents = [
  {
    title: "Review & Survey Hub",
    description: "Collects and categorizes feedback.",
  },
  {
    title: "Local SEO Hub",
    description: "Links review strength to Maps ranking.",
  },
  {
    title: "Reporting Studio",
    description: "Summarizes performance and trust trends.",
  },
];

const heroImages = [
  { src: "/img/cafe-owner-see.jpeg", alt: "Business owner checking reviews" },
  { src: "/img/02-store-journey.jpeg", alt: "Customer feedback experience" },
  { src: "/img/02-growain-engine.jpeg", alt: "Review dashboard" },
];

export default function ReviewsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-black to-black" />
        <div className="absolute inset-0 dot-noise opacity-20" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] items-center">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Reviews & Reputation</p>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-primary text-glow">
                  Before people call, click, or visit-they read reviews.
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  A strong reputation turns browsers into buyers. But for many businesses, reviews are scattered,
                  inconsistent, or unmonitored. One negative review can outweigh a dozen happy customers simply
                  because no one asked the others to share their voice.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="pulse-glow" asChild>
                  <Link href="/book-demo">
                    Get My Review System
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

      {/* Why Reviews Matter */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_minmax(0,0.85fr)] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Why Reviews Matter</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
                Before people call, click, or visit-they read reviews.
              </h2>
              <p className="text-lg text-foreground/80">
                A strong reputation turns browsers into buyers. But for many businesses, reviews are scattered,
                inconsistent, or unmonitored. One negative review can outweigh a dozen happy customers simply
                because no one asked the others to share their voice.
              </p>
            </div>
            <Card className="border-primary/20 bg-black/50 backdrop-blur">
              <CardContent className="p-8 space-y-4">
                {whyReviewsMatter.map((point) => (
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

      {/* What We Build */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-black to-black" />
        <div className="absolute inset-0 grid-surface opacity-10" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-10">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70">What We Build for You</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              An honest, effortless review system.
            </h2>
            <p className="text-lg text-foreground/80">
              Growain sets up automated, branded feedback flows that invite real customers to share their
              experience-right after a visit, call, or purchase. We make it easy for happy customers to leave
              reviews and for you to respond quickly and authentically.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {coreFeatures.map((feature) => (
              <Card key={feature} className="border-primary/15 bg-black/55">
                <CardContent className="flex items-start gap-3 p-6">
                  <MessageCircle className="mt-1 h-5 w-5 text-primary" />
                  <p className="text-sm text-foreground/80">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg" className="pulse-glow" asChild>
              <Link href="/book-demo">
                Get My Review System
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Listening */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_1fr] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Smarter Listening with AI</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
                Turn feedback into growth insight.
              </h2>
              <p className="text-lg text-foreground/80">
                Growain's AI doesn't just count stars-it understands meaning. Using Cloudain's Review Intelligence
                Engine, it groups feedback into clear, actionable themes like wait time, staff kindness, shipping
                quality, or value for money.
              </p>
              <Button size="lg" variant="secondary" className="mt-4" asChild>
                <Link href="/book-demo">
                  See My Feedback Insights
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <Card className="border-primary/20 bg-black/60">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">AI Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <Sparkles className="mt-1 h-5 w-5 text-primary" />
                    <p className="text-sm text-foreground/80">{benefit}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Review + Reputation = Visibility */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-black to-black" />
        <div className="absolute inset-0 dot-noise opacity-15" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Review + Reputation = Visibility</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
                Your reputation helps you rank higher, too.
              </h2>
              <p className="text-lg text-foreground/80">
                Search engines love consistency and credibility. Every new, authentic review boosts your local
                visibility-especially when tied to your Google Business Profile. Growain ensures your review
                strategy supports your SEO and Maps performance automatically.
              </p>
              <Button size="lg" className="pulse-glow" asChild>
                <Link href="/book-demo">
                  Boost My Local Visibility
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <Card className="border-primary/20 bg-black/55">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Visibility Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {visibilityHighlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <TrendingUp className="mt-1 h-5 w-5 text-primary" />
                    <p className="text-sm text-foreground/80">{highlight}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Built for Real Businesses */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Built for Real Businesses</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Simple to use. Impossible to fake.
            </h2>
            <p className="text-lg text-foreground/80">
              We believe trust is earned, not manufactured. That's why Growain's system only collects genuine,
              verified customer feedback-no fake testimonials, no scripts, no shortcuts. Just real proof from
              real people.
            </p>
            <Card className="border-primary/20 bg-black/50 backdrop-blur inline-block">
              <CardContent className="p-8">
                <div className="flex items-center gap-4">
                  <Shield className="w-12 h-12 text-primary" />
                  <p className="text-lg text-foreground/90 italic">
                    "If your customers already love you, Growain makes sure the internet knows it too."
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="pt-4">
              <Button size="lg" className="pulse-glow" asChild>
                <Link href="/book-demo">
                  Start My Honest Review System
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* System Integration */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-black to-black" />
        <div className="absolute inset-0 grid-surface opacity-10" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6 text-center mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70">How It Fits in the Growain Engine</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Part of your connected growth system.
            </h2>
            <p className="text-lg text-foreground/80">
              Growain's Review & Survey Hub is integrated directly into the Growain Engine-linking reviews, SEO,
              and social performance. When feedback trends shift, our AI highlights them across your dashboard,
              helping you act fast and maintain trust.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {systemComponents.map((component) => (
              <Card key={component.title} className="border-primary/15 bg-black/55">
                <CardContent className="p-6 text-center space-y-3">
                  <BarChart3 className="w-8 h-8 text-primary mx-auto" />
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

      {/* Final CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-black to-black" />
        <div className="absolute inset-0 dot-noise opacity-20" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto space-y-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-emerald-dark flex items-center justify-center mx-auto glow-primary">
              <Star className="w-10 h-10 text-black fill-black" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Your next five stars are already out there. Let's earn them the right way.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="pulse-glow" asChild>
                <Link href="/book-demo">
                  Set Up My Review System
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
