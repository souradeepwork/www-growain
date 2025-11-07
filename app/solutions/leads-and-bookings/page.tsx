"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { GridScan } from "@/components/GridScan";
import { TrendingUp, CheckCircle2, ArrowRight, Sparkles, MessageSquare, MousePointerClick, BarChart3 } from "lucide-react";

const sections = [
  {
    title: "Why Leads Are Lost",
    description: "Most businesses don't have a lead problem. They have a conversion problem. Visitors arrive, but can't figure out how to reach you, book, or ask a question. Friction kills momentum.",
    items: [
      "Hidden contact details",
      "Forms with too many fields",
      "No clear next step",
      "Slow or generic follow-up",
    ],
    image: "/img/cafe-owner-02.jpeg",
    imagePosition: "left" as const,
  },
  {
    title: "What We Build",
    description: "We design, test, and deploy simple, high-intent paths from interest to action. Click to call. Tap to text. Quick forms. Live chat. Book instantly. Whatever shortens the gap.",
    items: [
      "Optimized contact forms with smart fields",
      "Click-to-call, click-to-text, live chat setup",
      "Booking and scheduling integrations",
      "Lead tracking and response workflows",
    ],
    image: "/img/Business-Owner-&-AI-Collaboration-Scene.jpeg",
    imagePosition: "right" as const,
  },
  {
    title: "See Which Channels Work",
    description: "The Growain Engine shows where leads are coming from (search, social, ads, reviews) and which paths actually convert. So you can double down on what works and fix what doesn't.",
    items: [
      "Lead source and conversion tracking",
      "Form and chat performance reports",
      "A/B testing on CTAs and placements",
      "Continuous optimization based on real behavior",
    ],
    image: "/img/dashoards-2.jpeg",
    imagePosition: "left" as const,
  },
];

export default function LeadsAndBookingsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] py-20 md:py-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 -z-30">
          <GridScan
            linesColor="#1f9d73"
            scanColor="#2ec08d"
            lineThickness={1.6}
            gridScale={0.11}
            scanDuration={3.8}
            scanOpacity={0.38}
            scanGlow={0.55}
            bloomIntensity={0.75}
            enablePost={true}
            sensitivity={0.58}
          />
        </div>
        <div className="absolute inset-0 hero-surface opacity-75 -z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black -z-15" />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center gap-3 text-sm text-foreground/60">
              <Link href="/solutions" className="hover:text-primary transition-colors">
                Solutions
              </Link>
              <span>/</span>
              <span className="text-primary">Leads & Bookings</span>
            </div>
            <div className="space-y-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center glow-primary">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
                <Sparkles className="h-4 w-4 text-primary" />
                Conversion Optimization
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight text-glow">
                Make it effortless to contact, book, or request a quote.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/85 leading-relaxed">
                Traffic is only valuable if people can reach you. Growain designs simple, high-intent paths from "interested" to "contacted," so leads don't get lost in the gap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="pulse-glow text-lg" asChild>
                  <Link href="/book-demo">
                    Audit My Lead Flow
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <Link href="/solutions">View All Solutions</Link>
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

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-dark/20 via-secondary/15 to-black" />
        <div className="absolute inset-0 dot-noise opacity-25" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="glow-primary-strong border-primary/30 bg-black/60 backdrop-blur-xl">
              <CardContent className="p-8 md:p-16 text-center space-y-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-emerald-dark flex items-center justify-center mx-auto glow-primary">
                  <MessageSquare className="w-10 h-10 text-black" />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
                  Ready to turn more visitors into leads?
                </h2>
                <p className="text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto leading-relaxed">
                  Get a  lead flow audit and see exactly where you're losing potential customers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" className="pulse-glow text-lg" asChild>
                    <Link href="/book-demo">
                      Audit My Lead Flow
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
        </div>
      </section>
    </div>
  );
}
