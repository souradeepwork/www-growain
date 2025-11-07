"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import {
  Activity,
  Search,
  Building2,
  MapPin,
  MessageSquare,
  Mail,
  PlugZap,
  ShieldCheck,
  ArrowRight,
  Workflow,
  Layers3,
  Sparkles,
  BarChart3,
} from "lucide-react";

const integrations = [
  {
    icon: Activity,
    name: "Google Analytics 4 (GA4)",
    description: "Track every visitor and conversion accurately.",
  },
  {
    icon: Search,
    name: "Google Search Console",
    description: "Understand visibility, keywords, and ranking performance.",
  },
  {
    icon: Building2,
    name: "Google Business Profile",
    description: "Sync your local presence, hours, and updates.",
  },
  {
    icon: MapPin,
    name: "Google Maps Data",
    description: "Merge local search behavior and footfall insights.",
  },
  {
    icon: MessageSquare,
    name: "ChatCloud / ChatCRM",
    description: "Integrate conversations, leads, and customer actions.",
  },
  {
    icon: Mail,
    name: "Email & SMS Providers",
    description: "Automate follow-ups and feedback requests.",
  },
];

const valueProps = [
  {
    icon: ShieldCheck,
    title: "One consistent tracking standard",
    description: "Unify performance data across sources so every team trusts the numbers.",
  },
  {
    icon: Layers3,
    title: "No manual exporting or stitching",
    description: "Everything stays synced automatically-no more CSV juggling or mismatched IDs.",
  },
  {
    icon: Sparkles,
    title: "Faster insight to action",
    description: 'Go from "What happened?" to "Here\'s why" in seconds with context-rich views.',
  },
  {
    icon: BarChart3,
    title: "Reliable growth view",
    description: "Clarity that scales with your business, partners, and locations.",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Stack review and goal mapping",
    description: "We inventory every analytics, listings, messaging, and reporting tool already in play.",
  },
  {
    step: "02",
    title: "Secure connection and normalization",
    description: "Read-only permissions, clean naming, and shared identifiers keep data safe and aligned.",
  },
  {
    step: "03",
    title: "Insight-to-action automations",
    description: "Signals flow into Growain playbooks, alerts, and reporting so teams can act fast.",
  },
];

const signalLayers = [
  {
    icon: Layers3,
    title: "Signals captured",
    description: "Search queries, GBP updates, reviews, GA4 events, chat transcripts, and footfall data.",
  },
  {
    icon: Sparkles,
    title: "Context applied",
    description: "AI scoring, anomaly detection, and intent tagging keep every metric easily explainable.",
  },
  {
    icon: Workflow,
    title: "Actions triggered",
    description: "Playbooks, alerts, and reporting stay aligned with business priorities automatically.",
  },
];

export default function IntegrationsPage() {
  return (
    <div className="relative min-h-screen">
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-black to-black" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary/10 to-transparent blur-3xl opacity-70" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                Integrations
                <PlugZap className="h-4 w-4 text-primary" />
              </span>
              <div className="space-y-4">
                <h1 className="text-5xl font-display text-primary text-glow md:text-6xl">
                  Connect the tools you already use.
                </h1>
                <p className="text-xl leading-relaxed text-foreground/80">
                  Growain works with your existing stack so you keep your data and gain clarity.
                  <br className="hidden md:block" />
                  Our integrations ensure every signal-from search and reviews to analytics and chat-is unified into one consistent system.
                </p>
              </div>
              <div className="grid gap-4 text-sm text-foreground/70 sm:grid-cols-2">
                <div className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-3">
                  <p className="font-semibold text-primary">Search & Maps</p>
                  <p>Keywords, rankings, reviews, and visibility.</p>
                </div>
                <div className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-3">
                  <p className="font-semibold text-primary">Engagement</p>
                  <p>Chats, forms, email, SMS, and follow-ups.</p>
                </div>
                <div className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-3">
                  <p className="font-semibold text-primary">Analytics</p>
                  <p>Every visit, event, and conversion in GA4.</p>
                </div>
                <div className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-3">
                  <p className="font-semibold text-primary">Local Presence</p>
                  <p>GBP accuracy, hours, and location updates.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <Button size="lg" className="pulse-glow" asChild>
                  <Link href="/book-demo">
                    Talk to Us About Your Stack
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-foreground/60">
                We'll review your tools, identify overlaps, and connect them to the Growain Engine by Cloudain.
              </p>
            </div>

            <Card className="glow-primary-strong">
              <CardHeader className="space-y-4">
                <CardTitle className="text-3xl text-primary">Unified Stack View</CardTitle>
                <CardDescription className="text-base text-foreground/80">
                  Every integration lands in one clean, explainable system so leadership and partners always see the full story.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {signalLayers.map((layer) => (
                  <div
                    key={layer.title}
                    className="flex items-start gap-4 rounded-xl border border-primary/30 bg-black/40 p-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <layer.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-display text-lg text-primary">{layer.title}</p>
                      <p className="text-sm text-foreground/70">{layer.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-black via-secondary/10 to-black py-20 md:py-28">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-primary/70">Current Integrations</p>
            <h2 className="text-4xl font-display font-bold text-primary md:text-5xl">
              Growain already connects with industry-standard tools and Cloudain ecosystem products.
            </h2>
            <p className="text-lg text-foreground/80">
              Add what you use today, keep governance intact, and let Growain handle the normalization, QA, and monitoring.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration) => (
              <Card key={integration.name} className="hover-scale h-full">
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <integration.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl text-primary">{integration.name}</CardTitle>
                  </div>
                  <CardDescription className="text-base text-foreground/70">
                    {integration.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-primary/70">Why It Matters</p>
            <h2 className="text-4xl font-display font-bold text-primary md:text-5xl">
              Every signal in one consistent standard.
            </h2>
            <p className="text-lg text-foreground/80">
              Keep moving fast without rebuilding your stack. Growain keeps every integration clean, secure, and aligned to growth outcomes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {valueProps.map((value) => (
              <Card key={value.title} className="h-full border-primary/30 bg-black/40">
                <CardHeader className="space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl text-primary">{value.title}</CardTitle>
                  <CardDescription className="text-base text-foreground/70">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/20 py-20 md:py-28">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-primary/70">How We Plug In</p>
              <h2 className="text-4xl font-display font-bold text-primary md:text-5xl">
                From stack audit to automated clarity.
              </h2>
              <p className="text-lg text-foreground/80">
                The Growain team does the heavy lifting. You stay in your tools while we keep everything synced, governed, and insight-ready.
              </p>
            </div>
            <Card className="glow-primary">
              <CardContent className="space-y-6 p-8">
                {workflowSteps.map((step) => (
                  <div
                    key={step.step}
                    className="flex items-start gap-4 border-b border-primary/20 pb-6 last:border-b-0 last:pb-0"
                  >
                    <div className="rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-primary">
                      {step.step}
                    </div>
                    <div>
                      <p className="text-xl font-display text-primary">{step.title}</p>
                      <p className="text-sm text-foreground/70">{step.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container px-4 sm:px-6 lg:px-8">
          <Card className="glow-primary-strong">
            <CardContent className="space-y-6 p-8 text-center md:p-12">
              <h2 className="text-4xl font-display font-bold text-primary md:text-5xl">
                Ready to unify your stack?
              </h2>
              <p className="text-lg text-foreground/80">
                Tell us what you already use. We'll connect it to the Growain Engine by Cloudain so your teams get trustworthy, action-ready insights every day.
              </p>
              <div className="flex justify-center">
                <Button size="lg" className="pulse-glow" asChild>
                  <Link href="/book-demo">
                    Talk to Us About Your Stack
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
