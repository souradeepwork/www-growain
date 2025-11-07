"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { GridScan } from "@/components/GridScan";
import { MapPin, TrendingUp, Star, Zap, BarChart3, ArrowRight, Sparkles } from "lucide-react";

const solutions = [
  {
    icon: MapPin,
    title: "Get More Local Customers",
    description: 'Turn "near me" searches into new customers. Stand out in local search and on Google Maps.',
    href: "/solutions/local-customers",
    image: "/img/cafe-owner-02.jpeg",
  },
  {
    icon: TrendingUp,
    title: "Get More Leads & Bookings",
    description: "Make it effortless to contact, book, or request a quote. Design simple, high-intent paths.",
    href: "/solutions/leads-and-bookings",
    image: "/img/dashoards-2.jpeg",
  },
  {
    icon: Star,
    title: "Build Reviews & Reputation",
    description: "Turn happy customers into visible proof. Earn more genuine reviews and manage feedback.",
    href: "/solutions/reputation",
    image: "/img/Business-Owner-&-AI-Collaboration-Scene.jpeg",
  },
  {
    icon: Zap,
    title: "Stay Active on Social & Search",
    description: "Stay visible without living on social. Planned content that aligns with your offers and story.",
    href: "/solutions/always-on-marketing",
    image: "/img/search-to-store-journey.jpeg",
  },
  {
    icon: BarChart3,
    title: "Know What's Working",
    description: "One clear view of your marketing reality. See how search, maps, reviews, and social work together.",
    href: "/solutions/insights",
    image: "/img/dashboards.jpeg",
  },
];

export default function SolutionsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] overflow-hidden py-24 md:py-32 flex items-center">
        <div className="absolute inset-0 -z-30">
          <GridScan
            linesColor="#1f9d73"
            scanColor="#2ec08d"
            lineThickness={1.5}
            gridScale={0.12}
            scanDuration={3.5}
            scanOpacity={0.35}
            scanGlow={0.6}
            scanSoftness={2.2}
            bloomIntensity={0.7}
            enablePost={true}
            sensitivity={0.6}
          />
        </div>
        <div className="absolute inset-0 hero-surface opacity-75 -z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black -z-15" />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
              <Sparkles className="h-4 w-4 text-primary" />
              Outcome-Driven Growth
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight text-glow">
              Start with the outcome you care about.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/85 leading-relaxed max-w-4xl mx-auto">
              Choose the result you want. Growain maps it to the right strategy, data, and
              execution—managed on the Growain Engine by Cloudain.
            </p>
            <Button size="lg" className="pulse-glow text-lg" asChild>
              <Link href="/book-demo">
                Book a  Growth Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Choose Your Goal Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-black via-secondary/10 to-black relative">
        <div className="absolute inset-0 dot-noise opacity-20" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70 mb-4">Choose Your Goal</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6 text-glow">
              Pick the outcome that matters most
            </h2>
            <p className="text-xl text-foreground/80">
              Each solution is a complete, managed program designed to deliver real results.
            </p>
          </div>

          <div className="space-y-10 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <Card
                key={solution.title}
                className="overflow-hidden border border-primary/25 bg-black/60 backdrop-blur-sm group hover:border-primary/60 transition"
              >
                <div
                  className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                >
                  <div className="lg:w-1/2">
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                      <div className="absolute top-6 left-6 rounded-full border border-primary/30 bg-black/60 px-4 py-1 text-xs uppercase tracking-[0.35em] text-primary/70">
                        Outcome {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 p-8 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                          <solution.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-3xl text-primary">{solution.title}</CardTitle>
                          <CardDescription className="text-base text-foreground/80 mt-2">
                            {solution.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs text-foreground/60">
                        <span className="px-3 py-1 rounded-full border border-primary/30">Managed</span>
                        <span className="px-3 py-1 rounded-full border border-primary/30">Full Tracking</span>
                        <span className="px-3 py-1 rounded-full border border-primary/30">Reporting Included</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="flex-1 pulse-glow text-base" asChild>
                        <Link href={solution.href}>
                          View Solution
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" className="flex-1 text-base" asChild>
                        <Link href="/book-demo">Talk to Us</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* One Engine Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-dark/20 via-secondary/10 to-black" />
        <div className="absolute inset-0 grid-surface opacity-20" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Card className="glow-primary-strong border-primary/30 bg-black/60 backdrop-blur-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="relative aspect-square md:aspect-auto min-h-[300px] md:min-h-0 order-2 md:order-1">
                  <Image
                    src="/img/02-growain-engine.jpeg"
                    alt="One Engine Behind Every Solution"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center space-y-6 order-1 md:order-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-emerald-dark flex items-center justify-center glow-primary">
                    <Zap className="w-8 h-8 text-black" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
                    One Engine Behind Every Solution
                  </h2>
                  <p className="text-lg md:text-xl text-foreground/85 leading-relaxed">
                    All solutions run on the same foundation: Search, Maps, website analytics, social,
                    reviews, and lead data are unified into a single source of truth.
                  </p>
                  <p className="text-lg md:text-xl text-foreground/85 leading-relaxed">
                    That lets every recommendation be consistent, measurable, and repeatable.
                  </p>
                  <Button size="lg" className="text-lg w-fit" asChild>
                    <Link href="/platform">
                      Explore the Growain Engine
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Not Sure CTA Section */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-secondary/15 to-black" />
        <div className="absolute inset-0 dot-noise opacity-25" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary text-glow">
              Not Sure Where to Start?
            </h2>
            <p className="text-xl md:text-2xl text-foreground/85 leading-relaxed max-w-3xl mx-auto">
              Answer a few questions, and we'll show you where you're losing visibility, leads, or
              trust—and what Growain can do about it.
            </p>
            <Button size="lg" className="pulse-glow text-lg px-10" asChild>
              <Link href="/book-demo">
                Book a  Growth Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
