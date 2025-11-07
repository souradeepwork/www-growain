"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { GridScan } from "@/components/GridScan";
import {
  MapPin,
  TrendingUp,
  Star,
  Zap,
  BarChart3,
  Users,
  Stethoscope,
  ShoppingBag,
  Coffee,
  Home,
  Dumbbell,
  Gem,
  Church,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Target,
  MessageSquare,
  Calendar,
} from "lucide-react";

const industries = [
  { icon: Building2, name: "Local & multi-location businesses" },
  { icon: Stethoscope, name: "Healthcare, clinics and wellness" },
  { icon: ShoppingBag, name: "Ecommerce and specialty retail" },
  { icon: Users, name: "Pet care & baby care brands" },
  { icon: Coffee, name: "Coffee, QSR & hospitality" },
  { icon: Home, name: "Senior care & home services" },
  { icon: Dumbbell, name: "Fitness, salons & spas" },
  { icon: Gem, name: "Jewelers, lifestyle & luxury" },
  { icon: Church, name: "Religious and community organizations" },
  { icon: Target, name: "Marketing agencies and in-house teams" },
];

const benefits = [
  {
    icon: MapPin,
    title: "More local visibility",
    description: "Stronger presence on Google Maps and local search for the terms that matter.",
    image: "/marketing/feature-analytics.png",
  },
  {
    icon: TrendingUp,
    title: "More leads & bookings",
    description: 'Clear, fast paths from "found you" to "contacted you".',
    image: "/marketing/feature-reports.png",
  },
  {
    icon: Star,
    title: "More trust",
    description: "Real reviews, consistent information, and confident first impressions.",
    image: "/marketing/Right_Image.jpeg",
  },
  {
    icon: Zap,
    title: "Always-on presence",
    description: "Planned social and search activity instead of random posting.",
    image: "/marketing/Social_Orchestration.jpg",
  },
  {
    icon: BarChart3,
    title: "Clarity",
    description: "One simple view of what's working across channels and locations.",
    image: "/marketing/in-house-dashboard.jpg",
  },
];

const howItWorks = [
  {
    step: "01",
    icon: Building2,
    title: "Connect Your Assets",
    description:
      "We connect your key assets: website, Google Business Profile, Maps, analytics, reviews, and (where relevant) chat and forms.",
    image: "/marketing/integrations-dashboard.png",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "Cloudain AI Analysis",
    description:
      "Cloudain's AI and data engine continually reads what people search, how they engage, where you show up, and how competitors move.",
    image: "/marketing/hero-dashboard.png",
  },
  {
    step: "03",
    icon: TrendingUp,
    title: "Growain Team Execution",
    description:
      "Growain's team turns those signals into improvements: local SEO, content, campaigns, review flows, reporting.",
    image: "/marketing/agency-hero.jpg",
  },
];


export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden py-24 md:py-32 flex items-center">
        <div className="absolute inset-0 -z-30">
          <GridScan
            linesColor="#1f9d73"
            scanColor="#2ec08d"
            lineThickness={1.8}
            gridScale={0.1}
            scanDuration={4.0}
            scanOpacity={0.4}
            scanGlow={0.5}
            scanSoftness={2}
            scanPhaseTaper={0.9}
            scanDelay={2.0}
            scanDirection="pingpong"
            bloomIntensity={0.8}
            bloomThreshold={0}
            bloomSmoothing={0}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
            enablePost={true}
            sensitivity={0.55}
          />
        </div>
        <div className="absolute inset-0 hero-surface opacity-80 -z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 -z-15" />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              AI-powered by Cloudain
            </span>
            <div className="space-y-8 fade-in-up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-[1.1] text-glow">
                Grow faster where your customers already search.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/85 leading-relaxed max-w-5xl mx-auto">
                Growain is an AI-powered marketing system built by Cloudain. We help real businesses—clinics,
                coffee shops, ecommerce brands, pet and baby care, senior services, fitness, jewelry, faithbased and local services—turn Google Search, Maps, reviews, and social into real visits, calls,
                bookings, and sales.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
              <Button size="lg" className="pulse-glow text-lg px-10" asChild>
                <Link href="/book-demo">
                  Book a  Growth Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10" asChild>
                <Link href="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-black via-secondary/10 to-black relative">
        <div className="absolute inset-0 dot-noise opacity-20" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70 mb-4">Who We Help</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6 text-glow">
              If your customers search, scroll, or check maps before they choose you, Growain is built for you.
            </h2>
            <p className="text-xl text-foreground/80">
              We partner with businesses across industries to help them grow where their customers are looking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {industries.map((industry, index) => (
              <Card
                key={industry.name}
                className="group hover-scale cursor-pointer border-primary/20 bg-black/40 backdrop-blur-sm text-center"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6 flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:glow-primary transition-all duration-300 group-hover:scale-110">
                    <industry.icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground/90 leading-snug">{industry.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-dark/10 to-black" />
        <div className="absolute inset-0 grid-surface opacity-15" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70 mb-4">What You Get</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6 text-glow">
              One system, managed for you
            </h2>
            <p className="text-xl text-foreground/80">
              No guesswork. No inflated promises. Just a clear operating model for growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="group hover-scale overflow-hidden border-primary/20 bg-black/40 backdrop-blur-sm"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground/75 leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Growain Works Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-black via-secondary/15 to-black relative">
        <div className="absolute inset-0 dot-noise opacity-25" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70 mb-4">How It Works</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6 text-glow">
              Powered by Cloudain AI
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              You get one accountable partner and one system designed to grow with you.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {howItWorks.map((item, index) => (
              <Card
                key={item.step}
                className="group hover-scale overflow-hidden border-primary/20 bg-black/50 backdrop-blur-sm"
              >
                <div className="grid md:grid-cols-[300px_1fr] gap-0">
                  <div className="relative aspect-square md:aspect-auto overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 768px) 300px, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-110"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/60" />
                    <div className="absolute top-4 left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-emerald-dark flex items-center justify-center glow-primary">
                      <span className="text-3xl font-display font-bold text-black">
                        {item.step}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 md:p-12 flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:glow-primary transition-all duration-300">
                        <item.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-3xl font-display font-bold text-primary">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="pulse-glow text-lg px-10" asChild>
              <Link href="/book-demo">
                Book a  Growth Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-dark/20 via-secondary/15 to-black" />
        <div className="absolute inset-0 dot-noise opacity-30" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <Card className="glow-primary-strong border-primary/30 bg-black/60 backdrop-blur-xl max-w-5xl mx-auto">
            <CardContent className="p-12 md:p-20 text-center space-y-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-emerald-dark flex items-center justify-center mx-auto glow-primary">
                <Sparkles className="w-12 h-12 text-black" />
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-primary text-glow">
                Ready to grow where your customers search?
              </h2>
              <p className="text-xl md:text-2xl text-foreground/85 max-w-3xl mx-auto leading-relaxed">
                Get a  growth audit and see exactly where you're losing visibility, leads, or
                trust—and what Growain can do about it.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
                <Button size="lg" className="pulse-glow text-lg px-10" asChild>
                  <Link href="/book-demo">
                    Book Your  Growth Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-10" asChild>
                  <Link href="/platform">Explore the Platform</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
