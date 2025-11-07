"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { GridScan } from "@/components/GridScan";
import {
  Calendar,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const sections = [
  {
    title: "Why Consistency Wins",
    description: "Every scheduled post is another proof point that you're open, attentive, and aligned with what customers need right now. Active profiles build trust and credibility. Regular posts reinforce your visibility across search and social.",
    items: [
      "Active profiles build trust and credibility",
      "Regular posts reinforce your visibility across search and social",
      "Consistency matters more than one-off bursts or campaigns",
      "A predictable rhythm signals reliability to both people and algorithms",
    ],
    image: "/img/store-journey.jpeg",
    imagePosition: "left" as const,
  },
  {
    title: "What We Run For You",
    description: "We build the calendar, craft the narrative, and publish wherever your audience expects to hear from you. Planned, meaningful content without the scramble.",
    items: [
      "Monthly content calendar tuned to your business vertical and seasons",
      "Posts around offers, education, community, events, and testimonials",
      "Cross-channel publishing (Google, Facebook, Instagram, LinkedIn, etc.)",
      "Tone and visuals adapted to your brand identity and target audience",
    ],
    image: "/img/03-store-journey.jpeg",
    imagePosition: "right" as const,
  },
  {
    title: "Guided by Real Performance",
    description: "Insight loops from the Growain Engine keep content aligned with what drives visits, leads, and conversations week after week. Every post ties back to measurable impact.",
    items: [
      "Data-backed adjustments to topics, formats, and posting times",
      "Insights from the Growain Engine show which posts drive engagement and leads",
      "Continuous learning loop between search visibility and social resonance",
      "Track what works and optimize content strategy in real-time",
    ],
    image: "/img/growain-engine.jpeg",
    imagePosition: "left" as const,
  },
];

export default function AlwaysOnMarketingPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[75vh] overflow-hidden py-20 md:py-32 flex items-center">
        <div className="absolute inset-0 -z-30">
          <GridScan
            linesColor="#1f9d73"
            scanColor="#2ec08d"
            lineThickness={1.7}
            gridScale={0.105}
            scanDuration={3.2}
            scanOpacity={0.4}
            scanGlow={0.65}
            bloomIntensity={0.8}
            enablePost={true}
            sensitivity={0.62}
          />
        </div>
        <div className="absolute inset-0 hero-surface opacity-70 -z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black -z-15" />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl space-y-8">
            <div className="flex items-center gap-3 text-sm text-foreground/60">
              <Link href="/solutions" className="transition-colors hover:text-primary">
                Solutions
              </Link>
              <span>/</span>
              <span className="text-primary">Always-On Marketing</span>
            </div>
            <div className="space-y-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center glow-primary">
                <Calendar className="w-10 h-10 text-primary" />
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
                <Sparkles className="h-4 w-4 text-primary" />
                Content & Social Marketing
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight text-glow">
                Stay visible without living on social.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/85 leading-relaxed max-w-4xl">
                Your customers check your profiles to see if you're active, reliable, and relevant.
                Growain keeps your brand present with planned, meaningful content that aligns with
                your offers, seasons, and story without demanding your constant attention.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row pt-4">
                <Button size="lg" className="pulse-glow text-lg" asChild>
                  <Link href="/book-demo">
                    Plan My Next 30 Days
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <Link href="/solutions">See All Solutions</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections with Alternating Layout */}
      <section className="py-20 md:py-32 relative">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 md:space-y-32">
            {sections.map((section, index) => (
              <div key={section.title} className="max-w-7xl mx-auto">
                <Card className="hover-scale group border-primary/20 bg-black/40 backdrop-blur-sm overflow-hidden">
                  <div className={`grid md:grid-cols-2 gap-0 ${section.imagePosition === 'right' ? 'md:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative aspect-[4/3] md:aspect-auto min-h-[400px] overflow-hidden ${section.imagePosition === 'right' ? 'md:col-start-2' : ''}`}>
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-110"
                        priority={index === 0}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-${section.imagePosition === 'left' ? 'r' : 'l'} from-transparent via-black/20 to-black/60`} />
                    </div>

                    {/* Content */}
                    <CardContent className={`p-8 md:p-12 flex flex-col justify-center space-y-6 ${section.imagePosition === 'right' ? 'md:col-start-1' : ''}`}>
                      <p className="text-sm uppercase tracking-[0.35em] text-primary/70">
                        {section.title}
                      </p>
                      <h2 className="text-4xl md:text-5xl font-display font-bold text-primary group-hover:text-glow transition-all">
                        {section.title}
                      </h2>
                      <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                        {section.description}
                      </p>
                      <ul className="space-y-4">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                            <span className="text-base md:text-lg text-foreground/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-dark/20 via-secondary/15 to-black" />
        <div className="absolute inset-0 grid-surface opacity-20" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <Card className="glow-primary-strong border-primary/30 bg-black/60 backdrop-blur-xl max-w-4xl mx-auto">
            <CardContent className="space-y-8 p-8 text-center md:p-16">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-emerald-dark flex items-center justify-center mx-auto glow-primary">
                <TrendingUp className="w-10 h-10 text-black" />
              </div>
              <h2 className="text-4xl font-display font-bold text-primary md:text-5xl">
                Ready to keep every profile active?
              </h2>
              <p className="text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto leading-relaxed">
                See how Growain's content system keeps your profiles active, consistent, and growth-aligned.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="pulse-glow text-lg" asChild>
                  <Link href="/book-demo">
                    Plan My Next 30 Days
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <Link href="/solutions">View All Solutions</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
