"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { GridScan } from "@/components/GridScan";
import { Star, CheckCircle2, ArrowRight, Sparkles, MessageCircle, TrendingUp, AlertCircle } from "lucide-react";

const sections = [
  {
    title: "The Reputation Gap",
    description: "Most happy customers never leave a review. Most frustrated ones do. That imbalance is why great businesses often look mediocre online. Growain closes the gap.",
    items: [
      "Proactive review requests sent at the right moment",
      "Simple one-tap review flows (no login friction)",
      "Multi-platform coverage: Google, Facebook, Yelp, and more",
      "Filters to prioritize happy customers for public reviews",
    ],
    image: "/img/cafe-owner-see.jpeg",
    imagePosition: "left" as const,
  },
  {
    title: "Simple Review Flows",
    description: "We build custom review funnels that send satisfied customers to Google and other public platforms, while routing unhappy ones to private feedback channels first. That way, issues get resolved before they become public complaints.",
    items: [
      "SMS and email review requests with smart timing",
      "Pre-review satisfaction check to filter feedback",
      "Direct links to your profiles (no search required)",
      "Automated follow-up for incomplete requests",
    ],
    image: "/img/02-store-journey.jpeg",
    imagePosition: "right" as const,
  },
  {
    title: "Listen, Learn, Improve",
    description: "The Growain Engine tracks review trends, flags issues before they spread, and shows which parts of your business are earning praise. Use those insights to fix what's broken and double down on what's working.",
    items: [
      "Real-time alerts for new reviews (positive and negative)",
      "Sentiment analysis and keyword tracking",
      "Competitor review benchmarking",
      "Response templates and guided reputation management",
    ],
    image: "/img/02-growain-engine.jpeg",
    imagePosition: "left" as const,
  },
];

export default function ReputationPage() {
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
              <span className="text-primary">Reviews & Reputation</span>
            </div>
            <div className="space-y-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center glow-primary">
                <Star className="w-10 h-10 text-primary" />
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
                <Sparkles className="h-4 w-4 text-primary" />
                Reputation Management
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight text-glow">
                Build trust before customers even call.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/85 leading-relaxed">
                Your reputation decides whether you're considered or skipped. Growain helps you collect more great reviews, respond professionally, and turn feedback into competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="pulse-glow text-lg" asChild>
                  <Link href="/book-demo">
                    Audit My Reputation
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
                  <Star className="w-10 h-10 text-black fill-black" />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
                  Ready to build a stronger reputation?
                </h2>
                <p className="text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto leading-relaxed">
                  Get a  reputation audit and see how your reviews compare to competitors in your market.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" className="pulse-glow text-lg" asChild>
                    <Link href="/book-demo">
                      Audit My Reputation
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
