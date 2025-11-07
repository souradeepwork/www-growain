import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { ArrowRight, MapPin, Search, Share2, MessageCircle, Target, Zap, BarChart3, Shield, CheckCircle, TrendingUp, Users, Building2 } from "lucide-react";

export const metadata = {
  title: "The Growain Platform One Connected System for Smarter Growth",
  description: "Growain is an AI-powered marketing platform that unifies SEO, social, reviews, and analytics into one systemso businesses grow smarter, faster, and with full clarity.",
};

const coreModules = [
  {
    icon: MapPin,
    name: "Local SEO Hub",
    description: "Optimizes Google Business Profiles, listings, and map rankings.",
  },
  {
    icon: Search,
    name: "Keyword & Intent Engine",
    description: "Finds what customers are really searching for and where you can win.",
  },
  {
    icon: Share2,
    name: "Social Orchestrator",
    description: "Schedules and analyzes social content that drives engagement.",
  },
  {
    icon: MessageCircle,
    name: "Review & Survey Hub",
    description: "Gathers, analyzes, and amplifies customer feedback.",
  },
  {
    icon: Target,
    name: "Lead & Funnel Tracker",
    description: "Maps every click, form, and booking back to its source.",
  },
  {
    icon: Zap,
    name: "Automation Studio",
    description: "Handles alerts, follow-ups, and recurring tasks.",
  },
  {
    icon: BarChart3,
    name: "Reporting Studio",
    description: "Brings all your metrics into one clean, actionable dashboard.",
  },
];

const supportingPoints = [
  "One login, one source of truth.",
  "Data flows between tools automatically no manual reports.",
  "AI learns from your patterns and suggests next best actions.",
  "Everything managed by your Growain team, powered by Cloudain.",
];

const actionExamples = [
  "Your Maps visibility dropped in Riverside update your photos and add new reviews.",
  "Posts about pet care generated 3x more clicks than your offers schedule more.",
  "Lead form conversions increased after simplifying your headline apply this format sitewide.",
];

const cloudainAdvantages = [
  "Always-on SEO and performance monitoring.",
  "Instant alerts and live reporting.",
  "Reliable, compliant, and data-secure from day one.",
  "Integrates seamlessly with Google, Meta, and third-party tools.",
];

const audienceHighlights = [
  { icon: Building2, text: "Local & multi-location businesses" },
  { icon: Shield, text: "Healthcare, hospitality, and retail brands" },
  { icon: Users, text: "Agencies managing multiple clients" },
  { icon: TrendingUp, text: "Marketing leaders needing unified insights" },
];

const analyticsFeatures = [
  "Unified reporting across search, social, and reviews.",
  "AI summaries that highlight opportunities.",
  "Side-by-side comparisons for campaigns and locations.",
  "Exportable 'evidence reports' for teams and clients.",
];

const heroImages = [
  {
    src: "/img/cafe-owner-02.jpeg",
    alt: "Connected marketing dashboard",
  },
  {
    src: "/img/store-journey.jpeg",
    alt: "Business growth analytics",
  },
  {
    src: "/img/search-to-store-journey.jpeg",
    alt: "Unified platform interface",
  },
];

export default function PlatformPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-b from-secondary/30 via-black to-black">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-black to-black" />
        <div className="absolute inset-0 dot-noise opacity-20" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] items-center">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">The Growain Platform</p>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-primary text-glow">
                  One platform. Every growth signal connected.
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  Growain brings your SEO, Maps, reviews, content, and analytics into one connected system powered by Cloudain AI. See what's working, automate what's not, and grow where your customers already search.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="pulse-glow" asChild>
                  <Link href="#engine">
                    Explore the Platform
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/book-demo">Book a Free Growth Audit</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-2xl border border-primary/20 ${
                    index === 2 ? "col-span-2 h-48" : "h-64"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Built This */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_minmax(0,0.85fr)] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Why We Built the Growain Platform</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
                Marketing shouldn't feel like juggling ten disconnected tools.
              </h2>
              <p className="text-lg text-foreground/80">
                Every business today runs on scattered systems SEO tools, ad dashboards, review platforms, analytics, and social schedulers none of them speaking to each other. Growain changes that by unifying your growth data, automating insights, and connecting your actions across every channel.
              </p>
            </div>
            <Card className="border-primary/20 bg-black/50 backdrop-blur">
              <CardContent className="p-8 space-y-4">
                {supportingPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground/80">{point}</p>
                  </div>
                ))}
                <Button className="w-full mt-4" variant="secondary" asChild>
                  <Link href="#engine">
                    See How It Works
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Growain Engine */}
      <section id="engine" className="relative py-20 md:py-28 bg-gradient-to-b from-black via-secondary/5 to-black">
        <div className="absolute inset-0 grid-surface opacity-10" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-12 text-center mx-auto">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70">The Growain Engine</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              The operating system for organic growth.
            </h2>
            <p className="text-lg text-foreground/80">
              At the heart of Growain is the Growain Engine an AI-powered marketing core that watches your visibility, engagement, and reputation across platforms and turns data into concrete action.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreModules.map((module) => (
              <Card key={module.name} className="border-primary/15 bg-black/55">
                <CardHeader className="flex items-start gap-4 p-6">
                  <div className="rounded-2xl bg-primary/10 p-3 shrink-0">
                    <module.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-primary">{module.name}</h3>
                    <p className="text-sm text-foreground/70">{module.description}</p>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className="pulse-glow" asChild>
              <Link href="/book-demo">
                Explore the Engine
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* From Data to Action */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_1fr] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">From Data to Action</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
                See. Understand. Improve. Repeat.
              </h2>
              <p className="text-lg text-foreground/80">
                Growain doesn't just measure it moves. Our AI identifies changes in your performance, explains why they happened, and triggers the next best action. You'll always know what's driving results, and what needs attention next.
              </p>
              <Button size="lg" variant="secondary" className="mt-4" asChild>
                <Link href="/book-demo">
                  Get My AI Insights
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <Card className="border-primary/20 bg-black/60 backdrop-blur">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-xl font-semibold text-primary mb-4">AI-Powered Action Examples:</h3>
                {actionExamples.map((example, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/80 italic">"{example}"</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cloudain-Powered Foundation */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-black via-secondary/5 to-black">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-black to-black" />
        <div className="absolute inset-0 dot-noise opacity-15" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Cloudain-Powered Foundation</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
                Built on enterprise-grade AI and cloud infrastructure.
              </h2>
              <p className="text-lg text-foreground/80">
                Growain runs on Cloudain, our secure, scalable cloud platform that powers real-time analytics and automation for businesses of any size. It's the same foundation trusted by enterprise teamsadapted for the agility small and mid-sized businesses need.
              </p>
              <Button size="lg" className="pulse-glow" asChild>
                <Link href="https://cloudain.com" target="_blank">
                  Learn About Cloudain
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <Card className="border-primary/20 bg-black/60 backdrop-blur">
              <CardContent className="grid gap-6 p-8">
                {cloudainAdvantages.map((advantage) => (
                  <div key={advantage} className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground/80">{advantage}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Designed for Real-World Businesses */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Designed for Real-World Businesses</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Built for people who want results, not reports.
            </h2>
            <p className="text-lg text-foreground/80">
              Growain is built for business owners, marketers, and agencies who need clarity and momentum, not more complexity. Whether you run one local clinic or fifty retail locations, Growain gives you the same advantage: clarity, consistency, and control.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {audienceHighlights.map((audience) => (
              <Card key={audience.text} className="border-primary/15 bg-black/55">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <audience.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-foreground/80 font-medium">{audience.text}</p>
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

      {/* Analytics Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-black via-secondary/5 to-black">
        <div className="absolute inset-0 grid-surface opacity-10" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-10">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Proof in Every Pixel</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Analytics that explain, not overwhelm.
            </h2>
            <p className="text-lg text-foreground/80">
              Every data point inside the Growain Platform connects back to measurable outcomescalls, leads, bookings, and reviews. Our dashboards focus on clarity, not clutter, showing what changed, why it changed, and how to improve.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {analyticsFeatures.map((feature) => (
              <Card key={feature} className="border-primary/15 bg-black/55">
                <CardContent className="flex items-start gap-3 p-6">
                  <BarChart3 className="mt-1 h-5 w-5 text-primary shrink-0" />
                  <p className="text-foreground/80">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/book-demo">
                Explore Analytics
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Growain Works */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Why Growain Works</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Because growth happens when everything connects.
            </h2>
            <p className="text-lg text-foreground/80">
              Growain combines data, AI, and human expertise to keep your marketing running like a systemnot a scramble. When one signal changes, the whole system adjusts. That's what turns marketing from guesswork into growth.
            </p>
            <Card className="border-primary/20 bg-black/50 backdrop-blur inline-block">
              <CardContent className="p-8">
                <div className="flex items-center gap-4">
                  <Zap className="w-12 h-12 text-primary shrink-0" />
                  <p className="text-lg text-foreground/90 italic">
                    "We didn't build another tool. We built the operating system for organic growth."
                  </p>
                </div>
              </CardContent>
            </Card>
            <Button size="lg" className="pulse-glow mt-8" asChild>
              <Link href="/book-demo">
                Get Started with Growain
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-black via-secondary/20 to-black">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-black to-black" />
        <div className="absolute inset-0 dot-noise opacity-20" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Your growth system, connected and ready.
            </h2>
            <Button size="lg" className="pulse-glow" asChild>
              <Link href="/book-demo">
                Explore the Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
